const address = {
    country: 'Ukraine',
    city: 'Lviv',
    street: 'Naukova',
};

const expectedResult = ['country', 'city', 'street'];

test('return an array of enumerable property names of given object', () => {
    expect(Object.keys(address)).toStrictEqual(expectedResult);
});