import { it, expect, describe } from 'vitest';
import { formatMoney } from './money';

describe('formatMoney', () => {
    it('formats 1999 cents into $19.99', () => {
        const result = formatMoney(1999)
        expect(result).toBe('$19.99')
    })

    it('displays 2 decimals', () => {
        const result = formatMoney(1000)
        expect(result).toBe('$10.00')
        expect(formatMoney(100)).toBe('$1.00')
    })
})
