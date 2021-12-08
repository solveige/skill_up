test('private fields are not accessible from outside of the class', () => {
	class ClassWithPrivateMethod {
		#message = 'hello user';
	};

	const newClass = new ClassWithPrivateMethod();

	expect(newClass.message).toBe(undefined);
});

test('private methods are not accessible from outside of the class', () => {
	class ClassWithPrivateMethod {
		#sayHello() {
			return 'hello user';
		};
	};

	const newClass = new ClassWithPrivateMethod();

	expect(newClass.sayHello).toBe(undefined);
});

test('private instance methods are methods available on class instances', () => {
	class ClassWithPrivateMethod {
		#sayHello() {
			return 'hello user';
		};

		getPrivateMessage() {
			return this.#sayHello();
		}
	};

	const newClass = new ClassWithPrivateMethod();
	const expectedResult = 'hello user';

	expect(newClass.getPrivateMessage()).toBe(expectedResult);
});