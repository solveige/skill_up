test('getOwnPropertySymbols', () => {
    const obj = {
        a: Symbol('a'),
        b: 'b'
    };

    const expectedResult = [Symbol('a')]

    expect(Object.getOwnPropertySymbols(obj)).toStrictEqual(expectedResult);
});

test('getOwnPropertySymbols empty', () => {
    const obj = {
        a: {
            aa: Symbol('a'),
        },
        b: 'b'
    };

    const expectedResult = []

    expect(Object.getOwnPropertySymbols(obj)).toStrictEqual(expectedResult);
});