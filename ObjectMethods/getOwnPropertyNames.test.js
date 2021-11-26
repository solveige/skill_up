test('getOwnPropertyNames', () => {
    const obj = {
        a: 1,
        b: 2,
        c: {
            d: 3,
            e: 4,
        },
    };

    const expectedResult = ['a', 'b', 'c']

    expect(Object.getOwnPropertyNames(obj)).toStrictEqual(expectedResult);
});

test('getOwnPropertyNames string', () => {
    const expectedResult = ['0', '1', '2', '3', '4', '5', 'length']
    expect(Object.getOwnPropertyNames('string')).toStrictEqual(expectedResult);
});