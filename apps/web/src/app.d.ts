// See https://svelte.dev/docs/kit/types#app.d.ts
declare global {
	/** Which runtime this build targets; set from PLATFORM in vite.config.ts. */
	const __PLATFORM__: 'cloudflare' | 'node';

	namespace App {
		// interface Error {}
		// interface Locals {}  // gets `ctx` (ports and adapters) in Phase 0 step 3
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
