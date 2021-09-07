const spinWords = require('./spin_words');

describe('Spin Words', () => {
  test('Welcome should be emocleW', () => {
    const result = spinWords('Welcome');
    expect(result).toEqual('emocleW');
  });

  test('Hey fellow warriors should be Hey wollef sroirraw', () => {
    const result = spinWords('Hey fellow warriors');
    expect(result).toEqual('Hey wollef sroirraw');
  });

  test('This is a test should be This is a test', () => {
    const result = spinWords("This is a test");
    expect(result).toEqual("This is a test");
  });

  test('Hey fellow warriors should be This is rehtona test', () => {
    const result = spinWords("This is another test");
    expect(result).toEqual("This is rehtona test");
  });
  test('You are almost to the last test should be You are tsomla to the last test', () => {
    const result = spinWords('You are almost to the last test');
    expect(result).toEqual('You are tsomla to the last test');
  });
})