import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitest/config';
import adapterCloudflare from '@sveltejs/adapter-cloudflare';
import adapterNode from '@sveltejs/adapter-node';
import { sveltekit } from '@sveltejs/kit/vite';

// One codebase, two runtimes (plan §5.2): PLATFORM=cloudflare builds the Worker,
// anything else builds the Node server used by the self-host Docker image.
const platform = process.env.PLATFORM === 'cloudflare' ? 'cloudflare' : 'node';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: platform === 'cloudflare' ? adapterCloudflare() : adapterNode()
		})
	],
	define: {
		__PLATFORM__: JSON.stringify(platform)
	},
	ssr: {
		// Workspace packages ship TypeScript source, so bundle them into the server build.
		noExternal: [/^@thelinks\//]
	},
	test: {
		expect: { requireAssertions: true },
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
