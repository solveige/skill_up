test('instance properties can be called through a class instance', () => {
	const name = "Cat";
	class Cat {
		className = name;
	};

	const newCat = new Cat();

	expect(newCat.className).toBe(name);
});

test('instance properties can not be called on the class itself', () => {
	const name = "Cat";

	class Cat {
		className = name;
	};

	expect(Cat.className).not.toBe(name);
});

test('calling instance method of standard built-in objects', () => {
	const number = 155;

	expect(number.toString()).toBe(`${number}`);
});

test('instance methods can be called through a class instance', () => {
	class Double {
		calculate(number) {
			return number * 2;
		}
	};

	const double = new Double();
	const expectedResult = 4;

	expect(double.calculate(2)).toBe(expectedResult);
});


