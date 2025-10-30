import { describe, it, expect } from 'vitest';
import { computeTotalScoreOf } from '.';

const INITIAL_VALUE = 0;

describe('Test yams with only one basiC throw', () => {
  it.each([
    { uniqueThrow: [1, 1, 1, 1, 1], expected: 50 },
  ])('Sum of $uniqueThrow equals $expected', ({ uniqueThrow, expected }) => {
    let total = computeTotalScoreOf(uniqueThrow);
    expect(total).toBe(expected);
  });
});
