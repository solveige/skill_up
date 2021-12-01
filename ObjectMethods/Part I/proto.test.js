test('Prototype vs __proto__', () => {
    const obj = { a: 1 };

    expect(Object.getPrototypeOf(obj) === obj.__proto__).toBe(true);
});