const pet = {
  isFavorite: true,
  family: 'cats',
  printIntroduction() {
    return `The pet name is ${this.name}. Am I favorite? ${this.isFavorite}`
  }
};

test('create a new object with prototype of passed one', () => {
  const myCat = Object.create(pet);
  myCat.name = "Sirko";

  expect(myCat.printIntroduction()).toBe(`The pet name is Sirko. Am I favorite? true`);
});

test('built-in functions cant be used in object created from null', () => {
  const objectCreatedFromNull = Object.create(null);

  expect(objectCreatedFromNull.toString).toBe(undefined);
});