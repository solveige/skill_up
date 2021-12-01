const obj = {
    name: 'Ema',
    city: 'Dublin',
};

const expectedResult = [['name', 'Ema'], ['city', 'Dublin']];

test('should return array of arrays with pairs of key-value', () => {
    expect(Object.entries(obj)).toStrictEqual(expectedResult);
});