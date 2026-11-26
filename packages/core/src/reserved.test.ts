import { describe, expect, it } from 'vitest';
import { isReservedHandle, reservedHandles } from './reserved';

describe('isReservedHandle', () => {
	it('blocks routes the app owns', () => {
		for (const route of ['app', 'api', 'tools', 'pricing', 'login', 'qr']) {
			expect(isReservedHandle(route)).toBe(true);
		}
	});

	it('ignores case and surrounding whitespace', () => {
		expect(isReservedHandle('Admin')).toBe(true);
		expect(isReservedHandle('  PRICING ')).toBe(true);
	});

	it('allows ordinary handles', () => {
		expect(isReservedHandle('aftaab')).toBe(false);
		expect(isReservedHandle('my-band')).toBe(false);
	});

	it('stores every entry lowercase and without duplicates', () => {
		expect(reservedHandles.every((h) => h === h.toLowerCase())).toBe(true);
		expect(new Set(reservedHandles).size).toBe(reservedHandles.length);
	});
});
