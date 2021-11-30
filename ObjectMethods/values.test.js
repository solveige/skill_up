const pets = {
  cat: 'Sirko',
  dog: 'Lord',
  duck: 'Brown',
};

const expectedResult = ['Sirko', 'Lord', 'Brown'];

test('return an array of enumerable property values of the object', () => {
  expect(Object.values(pets)).toStrictEqual(expectedResult);
});