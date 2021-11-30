const person = {
    name: 'Evan',
    hobby: 'Music',
};

const person2 = {
    name: 'Eva',
    hobby: 'Music',
};

test('compare two values and return true if they are the same', () => {
    expect(Object.is(person.hobby, person2.hobby)).toBe(true);
});

test('compare two objects and return true if both reference the same object', () => {
    const obj = { a: 1 };
    expect(Object.is(obj, obj)).toBe(true);
});

test('compare two values and return true if both are null', () => {
    expect(Object.is(null, null)).toBe(true);
});


test('compare two objects and return false if they reference different object in memory', () => {
    const obj = { a: 1 };
    const sameObj = { a: 1 };
    expect(Object.is(obj, sameObj)).toBe(false);
    expect(Object.is({}, {})).toBe(false);
});

test('return false if values are different', () => {
    expect(Object.is(person.name, person2.name)).toBe(false);
});

test('strict equal and Object.is treats 0 and NaN differently', () => {
    expect(Object.is(+0, -0) === (+0 === -0)).toBe(false);
    expect(Object.is(NaN, Number.NaN) === (NaN === Number.NaN)).toBe(false);
});