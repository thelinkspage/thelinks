<p align="center">
  <img src="assets/brand/logo-transparent.png" alt="thelinks.page" width="96" height="96" />
</p>

<h1 align="center">thelinks.page</h1>

<p align="center"><strong>One link for everything you share. Every link tool you need.</strong></p>

<p align="center">
  <a href="https://thelinks.page">thelinks.page</a> ·
  <a href="ROADMAP.md">Roadmap</a> ·
  <a href="https://github.com/thelinkspage/trelay-legacy">Trelay (legacy)</a>
</p>

---

> [!NOTE]
> **Status: pre-alpha.** Phase 0 (foundations) is under way. Nothing here is usable yet. Watch the repo for the first release.

thelinks.page is an open-source **link-in-bio page builder** with a **full URL toolkit** behind it: short links, dynamic QR codes, UTM builder and privacy-first analytics. Use the hosted version at `thelinks.page/<username>`, or self-host every feature with one Docker image.

## What it does

**Link pages.** Claim `thelinks.page/<username>` in under a minute, then add blocks (links, headers, socials, images, embeds), pick a theme or design your own, and share it with a QR code or vCard. Per-block click analytics show inline in the editor.

**URL toolkit.** Short links with custom slugs, expiry, click limits, passwords and one-time links. Dynamic QR codes you can re-target without reprinting. A UTM builder with saved templates, OG overrides that are actually served to crawlers, Safe Browsing checks, bulk ops, and import from Bitly, YOURLS, Shlink and Trelay.

**Analytics.** Views, clicks, uniques, geo, device, referrers and UTM breakdowns. No cookies and no consent banner: visitors are counted with a daily-salted hash, and raw IPs are never stored.

**Free tools** at `thelinks.page/tools`: QR generator, UTM builder, OG/meta debugger, URL unshortener, redirect-chain checker.

## Open source, all of it

- Licensed **AGPL-3.0**. Every product feature is self-hostable.
- The paid cloud plans pay for hosting, the shared `thelinks.page/username` URL, managed GeoIP, email, backups and higher limits. They don't unlock features.
- Self-host: `docker compose up` gives you the web app and Postgres. Custom domains work through Caddy with on-demand TLS.

## Stack

TypeScript monorepo (pnpm + Turborepo) · SvelteKit 2 / Svelte 5 · Drizzle ORM + Postgres 16 · Better Auth · Tailwind CSS v4.
A single codebase runs on **Cloudflare Workers** (cloud) and **Node in Docker** (self-host) through a ports-and-adapters layer.

```
apps/web        SvelteKit: marketing, tools, dashboard (/app), public pages, /api/v1
apps/ingest     Cloudflare queue consumer for analytics events
packages/core   domain logic: slugs, URL validation, redirect rules, UA/referrer parsing
packages/db     Drizzle schema + migrations
packages/*      adapters, ui, blocks, sdk
docker/         self-host image + compose
```

## Coming from Trelay?

thelinks is the successor to [Trelay](https://github.com/thelinkspage/trelay-legacy). It's a rewrite, not an in-place upgrade. It will ship a Trelay importer that brings over your links, so you can move whenever you're ready.

## License

[AGPL-3.0](LICENSE)
