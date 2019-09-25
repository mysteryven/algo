const sum1 = require('./index');

test('add 1 + 2', () => {
  expect(sum1(1, 2)).toBe(3);
})
