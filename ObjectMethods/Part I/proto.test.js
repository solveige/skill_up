test('prototype vs __proto__', () => {
  const obj = { a: 1 };

  expect(Object.getPrototypeOf(obj) === obj.__proto__).toBe(true);
});

test('prototype of custom class vs __proto__', () => {
  class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };

  //  Rectangle.prototype: {constructor: ƒ}
  //  Rectangle.__proto__: () { [native code] }

  expect(Rectangle.prototype !== Rectangle.__proto__).toBe(true)
})