test('method returns an object describing the configuration of a specific property on a given object', () => {
	const person = {
		name: 'Elrond',
		age: 6520,
	};

	Object.defineProperty(person, 'name', {
		writable: false,
		configurable: false
	});

	const descriptor = Object.getOwnPropertyDescriptor(person, 'name');

	expect(descriptor.writable).toBe(false);
});

test('method returns an mutable object but mutating it has no effect on the original configuration', () => {
	const person = {
		name: 'Elrond',
		age: 6520,
	};

	Object.defineProperty(person, 'name', {
		writable: false,
		configurable: false,
	});

	const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
	descriptor.writable = true;

	expect(Object.getOwnPropertyDescriptor(person, 'name') === descriptor.writable).toBe(false);
});

test('non-object first argument will be coerced to an object at first', () => {

	const descriptor = Object.getOwnPropertyDescriptor('elf', 0);

	const expectedResult = {
		configurable: false,
		enumerable: true,
		value: "e",
		writable: false
	};

	expect(descriptor).toStrictEqual(expectedResult);
});