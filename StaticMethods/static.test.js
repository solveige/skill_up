test('static properties cannot be called through a class instance', () => {
	const name = "Add";

	class Add {
		static className = name;
	};

	const newAdd = new Add();

	expect(newAdd.className).not.toBe(name);
});

test('static methods cannot be called through a class instance', () => {
	class Add {
		constructor(x) {
			this.x = x;
		}

		static addNumbers(a, b) {
			return a.x + b.x;
		}
	};

	const add5 = new Add(5);

	expect(add5.addNumbers).not.toBe(Add.addNumbers);
});

test('static methods called on the class itself', () => {
	class Add {
		constructor(x) {
			this.x = x;
		}

		static addNumbers(a, b) {
			return a.x + b.x;
		}
	};

	const add5 = new Add(5);
	const expectedResult = 10;

	expect(Add.addNumbers(add5, add5)).toBe(expectedResult);
});

test('static methods called on the class itself', () => {
	class AddTo10 {
		constructor() {
			this.x = 10;
		}

		static addNumbers(a) {
			return this.x + a;
		}
	};

	const addTo20 = AddTo10.addNumbers.bind({ x: 20 });
	const expectedResult = 30;

	expect(addTo20(10)).toBe(expectedResult);
});

test('calling static methods of standard built-in objects', () => {
	const number = 155;

	expect(Math.floor(155.333)).toBe(number);
});

test('private static methods are called on the class itself', () => {
	const number = 42;
	class ClassWithPrivateStaticMethod {
		static #privateMethod() {
			return number;
		}

		static publicMethod() {
			return ClassWithPrivateStaticMethod.#privateMethod();
		}
	}
	expect(ClassWithPrivateStaticMethod.publicMethod()).toBe(number);
});
