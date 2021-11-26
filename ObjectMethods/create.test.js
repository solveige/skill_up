const pet = {
    isFavorite: true,
    family: 'cats',
    printIntroduction: function () {
     return `The pet name is ${this.name}. Am I favorite? ${this.isFavorite}`
    }
  };

test('create', () => {
    const myCat = Object.create(pet);
    myCat.name = "Sirko"
    expect(myCat.printIntroduction()).toBe( `The pet name is Sirko. Am I favorite? true`);
  });