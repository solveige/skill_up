test('setPrototypeOf', () => {
    const protoObj = {
        propertyOne: '',
        method: function () {
            return this.propertyOne
        }
    };

    const newObj = Object.setPrototypeOf({}, protoObj)

    expect(Object.getPrototypeOf(newObj) === protoObj).toBe(true);
});
