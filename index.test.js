const arrayDiff = require('./index');

describe('Array Diff', () => {
  test('a was [], b was [4,5]', () => {
    const result = arrayDiff([], [4,5]);
    expect(result).toEqual([]);
  });
})