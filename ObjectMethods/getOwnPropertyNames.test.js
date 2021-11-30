test('should return array with object keys', () => {
  const personalInfo = {
    name: 'Lindy',
    age: 32,
    address: {
      country: 'Canada',
      city: 'Toronto',
    },
  };

  const expectedResult = ['name', 'age', 'address'];

  expect(Object.getOwnPropertyNames(personalInfo)).toStrictEqual(expectedResult);
});

test('a non-object argument will be coerced to an object', () => {
  const expectedResult = ['0', '1', '2', '3', '4', '5', 'length'];

  expect(Object.getOwnPropertyNames('string')).toStrictEqual(expectedResult);
});

test('Object.keys returns all enumerable own properties of an object, Object.getOwnPropertyNames returns all - enumerable and non-enumerable', () => {
  const personalInfo = {
    name: 'Lindy',
    age: 32,
    address: {
      country: 'Canada',
      city: 'Toronto',
    },
  };

  Object.defineProperties(personalInfo, {
    pets: { enumerable: false, value: 'cat' },
  });

  const keysWithGetOwnPropertyNames = Object.getOwnPropertyNames(personalInfo);
  const keysWithObjectKeys = Object.keys(personalInfo);

  expect(keysWithGetOwnPropertyNames.length === keysWithObjectKeys.length).toBeFalsy();
})