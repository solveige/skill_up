const address = {
    country: 'Ukraine',
    city: 'Lviv',
    street: 'Naukova',
}

const expectedResult = ['country', 'city', 'street']

test('keys', () => {
    expect(Object.keys(address)).toStrictEqual(expectedResult);
});