
test('object created using Object.create has the same prototype as the object it was created from', () => {
  const protoObj = {};
  const newObj = Object.create(protoObj);

  expect(Object.getPrototypeOf(newObj) === protoObj).toBe(true);
});

test('string is coerced to an Object', () => {
  expect(Object.getPrototypeOf('string')).toStrictEqual(String.prototype);
});

test('number string is coerced to an Object', () => {
  expect(Object.getPrototypeOf(78)).toStrictEqual(Number.prototype);
});

test('prototype of custom class', () => {
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  const figure = new Rectangle();

  expect(Object.getPrototypeOf(figure)).toStrictEqual(Rectangle.prototype)
})