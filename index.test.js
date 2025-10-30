import { describe, it, expect } from 'vitest';
import { computeTotalScoreOf } from '.';

const INITIAL_VALUE = 0;

describe('Values depending on number of doubles', () => {
    it.each([
        { uniqueThrow: [1, 1, 1, 1, 1], expected: 50 },
        { uniqueThrow: [1, 1, 1, 1, 2], expected: 35 },
        { uniqueThrow: [1, 1, 1, 2, 2], expected: 28 }
    ])('Sum of $uniqueThrow equals $expected', ({ uniqueThrow, expected }) => {
        let total = computeTotalScoreOf(uniqueThrow);
        expect(total).toBe(expected);
    });
});

describe('Values when no figure', () => {
    it.each([
        { uniqueThrow: [1, 2, 3, 4, 2], expected: 12 },
    ])('Sum of $uniqueThrow equals $expected', ({ uniqueThrow, expected }) => {
        let total = computeTotalScoreOf(uniqueThrow);
        expect(total).toBe(expected);
    });
});
