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

test('values of nested objects in private fields can be changed', () => {
	class ClassWithPrivate {
		#secretObject = {
			name: 'Ross',
			personalData: {
				age: 28,
				city: 'NY',
			}
		};

		getPrivateObj() {
			return this.#secretObject;
		};
	};

	const newClass = new ClassWithPrivate();
	const secretObject = newClass.getPrivateObj();

	const newAge = 29;
	secretObject.personalData.age = newAge;

	expect(newClass.getPrivateObj().personalData.age).toBe(newAge);
});

test('values of private object can be changed, if set its property configuration to writable', () => {
	class ClassWithPrivate {
		#privateObject = {
			name: 'Ross',
			personalData: {
				age: 28,
				city: 'NY',
			}
		};

		getPrivateObj() {
			return this.#privateObject;
		}
	};

	const newClass = new ClassWithPrivate();
	const secretObject = newClass.getPrivateObj();

	const newName = 'Monica';

	Object.defineProperty(secretObject, 'name', {
		value: newName,
		writable: true
	});

	expect(newClass.getPrivateObj().name).toBe(newName);
});