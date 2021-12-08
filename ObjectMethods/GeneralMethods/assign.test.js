const scores = {
  Anna: 4,
  Helen: 5,
  Diana: 6,
};

test('return copy of simpleObj', () => {
  expect(Object.assign({}, scores)).toStrictEqual(scores);
});

test('merge two objects, overwrite the same keys', () => {
  const target = {
    Anna: 1,
    Marry: 2,
    Helga: 3,
  };

  const expectedResult = {
    Anna: 4,
    Marry: 2,
    Helga: 3,
    Helen: 5,
    Diana: 6,
  };

  expect(Object.assign(target, scores)).toStrictEqual(expectedResult);
});

test('wrap primitives to objects, ignore null and undefined', () => {
  const expectedResult = {
    0: '1',
    1: '2',
    2: '3',
  };

  expect(Object.assign({}, null, undefined, '123', 5)).toStrictEqual(expectedResult);
});


test('source is copied to an target object as a shallow copy', () => {
  const obj = {
    name: 'Oksana',
    address: {
      city: 'Lviv',
      street: 'Kulparkivska',
    }
  };

  const copiedObj = Object.assign({}, obj);

  obj.address.city = 'Toronto';

  expect(copiedObj.address.city).toEqual('Toronto');
});
