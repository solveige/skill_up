test('check if an object is frozen, returns boolean', () => {
	const emptyObj = {};
	expect(Object.isFrozen(emptyObj)).toBe(false);
});

test('if Object.freeze() method was used, an object becomes frozen', () => {
	const person = {
		name: 'Sam',
		age: 39,
	};

	Object.freeze(person);

	expect(Object.isFrozen(person)).toBe(true);
});

test('if empty object is non-extensible, it also is frozen', () => {
	const emptyObj = Object.preventExtensions({});
	expect(Object.isFrozen(emptyObj)).toBe(true);
});

test('if non-extensible object has some properties, when we delete all his properties, it becomes frozen', () => {
	const person = Object.preventExtensions({
		name: 'Arwen',
		age: 2901,
	});

	delete person.name;
	delete person.age;

	expect(Object.isFrozen(person)).toBe(true);
});

test('if non-extensible object has non-writable and non-configurable properties, it is frozen', () => {
	const person = Object.preventExtensions({
		name: 'Saruman',
		age: 'unknown'
	});

	Object.defineProperty(person, 'name', {
		writable: false,
		configurable: false
	});

	Object.defineProperty(person, 'age', {
		writable: false,
		configurable: false
	});

	expect(Object.isFrozen(person)).toBe(true);
});

test('non-object argument will be treated as if it was a frozen ordinary object', () => {
	expect(Object.isFrozen(7)).toBe(true);
});
