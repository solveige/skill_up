const obj = {
    name: 'Ema',
    city: 'Dublin',
}

const expectedResult = [['name', 'Ema'], ['city', 'Dublin']]

test('entries', () => {
    expect(Object.entries(obj)).toStrictEqual(expectedResult);
  });