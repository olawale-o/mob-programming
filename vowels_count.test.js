const getCount = require('./vowels_count');

describe('Vowels Count', () => {
  test('abracadabra should have 5 vowels count', () => {
    const result = getCount("abracadabra");
    expect(result).toEqual(5);
  });

  test('pear tree should have 4 vowels count', () => {
    const result = getCount("pear tree");
    expect(result).toEqual(4);
  });

  test('o a kak ushakov lil vo kashu kakao should have 13 vowels count', () => {
    const result = getCount("o a kak ushakov lil vo kashu kakao");
    expect(result).toEqual(13);
  });
})

