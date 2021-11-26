const person = {
    name: 'Evan',
    hobby: 'Music',
}

const person2 = {
    name: 'Eva',
    hobby: 'Music',
}

test('is true', () => {
    const obj = {a: 1}
    expect(Object.is(person.hobby, person2.hobby)).toBe(true);
    expect(Object.is(obj, obj)).toBe(true);
    expect(Object.is(null, null)).toBe(true);
});

test('is false', () => {
    const obj = {a: 1}
    const sameObj = {a: 1}
    expect(Object.is(person.name, person2.name)).toBe(false);
    expect(Object.is(obj, sameObj)).toBe(false);
    expect(Object.is({}, {})).toBe(false);
});