test('return an array of one symbol property', () => {
  const object1 = {};
  const a = Symbol('a');
  const b = Symbol.for('b');
  
  object1[a] = 'localSymbol';
  object1[b] = 'globalSymbol';
  
  const objectSymbols = Object.getOwnPropertySymbols(object1);
  
  expect(objectSymbols).toHaveLength(2);
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