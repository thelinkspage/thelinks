import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// Liveness probe for the Docker healthcheck and uptime monitors.
export const GET: RequestHandler = () => json({ ok: true, platform: __PLATFORM__ });
