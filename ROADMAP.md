# Roadmap

Each phase ends with something deployable. ★ marks features that most link-in-bio tools don't offer.

## v1.0 (launch)

**Phase 0: Foundations**
- Monorepo (pnpm + Turbo), AGPL license, lint/format, Vitest, Playwright, GitHub Actions CI
- Postgres schema v1 (Drizzle) and the ports/adapters layer (Cloudflare + Node)
- Better Auth signup/login with an auto-created personal workspace
- Staging deploy on Cloudflare Workers; the Docker image builds and boots
- Port core logic from Trelay: slug generator, URL validator, bot detection, referrer normalization, import parsers

**Phase 1: Link pages MVP**
- Handle claim, a block editor with drag-and-drop and live mobile preview
- Blocks: link, header/text, social icons, image, embeds (YouTube/Spotify/SoundCloud/Vimeo), divider
- Preset and custom themes; share sheet (QR, vCard, native share); SEO meta; edge-cached SSR pages

**Phase 2: Analytics pipeline**
- Cookieless beacon, event queue, monthly-partitioned events, daily rollups
- Geo, device/OS/browser, referrer groups, UTM; overview plus per-page/block/link views ★

**Phase 3: URL toolkit**
- Short links: custom slugs, expiry, click-count expiry ★, passwords, one-time links, 302 by default
- OG overrides served to crawlers ★, dynamic QR designer with scan tracking, UTM builder with templates ★
- Import/export (Trelay, Bitly, YOURLS, Shlink, CSV/JSON), bulk ops, trash, Safe Browsing

**Phase 4: Plans and billing** (cloud only)

**Phase 5: Free tools and marketing site**
- QR generator, UTM builder, OG debugger, URL unshortener, redirect-chain checker

**Phase 6: Launch hardening**
- Abuse tooling, rate limits, load tests, backups, monitoring, self-host docs

## After launch (in priority order)

1. Custom domains
2. Scheduled blocks and skip-to redirect
3. Email capture and form blocks
4. Multiple profiles and teams
5. Targeting rules (geo/device/language) and A/B rotation ★
6. Webhooks and the TypeScript SDK
7. Real-time analytics and weekly email reports ★
8. Tabs, grid and carousel layouts
9. Retargeting pixels / GA4
10. Broken-link monitor ★
11. More free tools (bulk link checker, OG image generator, vCard, deep-link generator)
12. Audit log

## Later

Commerce/tips, AI page builder, Instagram sync, browser extension, CLI, mobile app.
