
test('getPrototypeOf', () => {
    const protoObj = {};
    const newObj = Object.create(protoObj);

    expect(Object.getPrototypeOf(newObj) === protoObj).toBe(true);
});

test('getPrototypeOf string', () => {
    expect(Object.getPrototypeOf('string')).toStrictEqual(String.prototype);
});

test('getPrototypeOf number', () => {
    expect(Object.getPrototypeOf(78)).toStrictEqual(Number.prototype);
});