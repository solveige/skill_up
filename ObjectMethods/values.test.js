const obj = {
    1: 'a',
    2: 'b',
    3: 'c',
}

const expectedResult = ['a', 'b', 'c']

test('values', () => {
    expect(Object.values(obj)).toStrictEqual(expectedResult);
});