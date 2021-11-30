test('return an array of one symbol property', () => {
  const obj = {
    a: Symbol('a'),
    b: 'b'
  };

  const expectedResult = [Symbol('a')];

  expect(Object.getOwnPropertySymbols(obj)).toStrictEqual(expectedResult);
});

test('return an empty array as there no symbol properties directly upon a given object', () => {
  const obj = {
    a: {
      aa: Symbol('a'),
    },
    b: 'b',
  };

  const expectedResult = [];

  expect(Object.getOwnPropertySymbols(obj)).toStrictEqual(expectedResult);
});