const simpleObj = {
  c: 4,
  d: 5,
  e: 6,
}

test('return copy of simpleObj', () => {
    expect(Object.assign({}, simpleObj)).toStrictEqual(simpleObj);
  });
  
test('merge two objects, overwrite the same keys', () => {
  const target = { 
    a: 1, 
    b: 2, 
    c: 3,
  }
  
  const expectedResult = {
    a: 1, 
    b: 2, 
    c: 4,
    d: 5,
    e: 6,
  }
  expect(Object.assign(target, simpleObj)).toStrictEqual(expectedResult);
});

test('wrap primitives to objects, ignore null and undefined', () => {
  const expectedResult = {
    0: '1', 
    1: '2', 
    2: '3',
  }
  expect(Object.assign({}, null, undefined, '123', 5 )).toStrictEqual(expectedResult);
});


test('not deep clone', () => {
const obj = {
  name: 'Oksana',
  address: {
    city: 'Lviv',
    street: 'Kulparkivska',
  }
}

const copiedObj = Object.assign({}, obj)

obj.address.city = 'Toronto'

  expect(copiedObj.address.city).toEqual('Toronto');
});
