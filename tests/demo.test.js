

describe('Demo tests', () => {
  test('It must pass', () => {
    // 1. Initialization
    const message1 = 'Hello world';
  
    // 2. Act
    const message2 = message1.trim();
  
    // 3. Assertion
    expect(message1).toBe(message2);
  });
});