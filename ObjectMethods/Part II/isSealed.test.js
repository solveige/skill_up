test('check if an object is sealed, returns boolean', () => {
	const emptyObj = {};
	expect(Object.isSealed(emptyObj)).toBe(false);
});

test('if empty object is non-extensible, it also is sealed', () => {
	const emptyObj = Object.preventExtensions({});
	expect(Object.isSealed(emptyObj)).toBe(true);
});

test('if properties of non-extensible object are non-configurable, the object is sealed', () => {
	const languages = Object.preventExtensions({
		ukrainian: 'native',
	});

	Object.defineProperty(languages, 'ukrainian', {
		configurable: false,
	});

	expect(Object.isSealed(languages)).toBe(true);
});

test('if Object.seal() method was used, an object becomes sealed', () => {
	const languages = {
		ukrainian: 'native',
		english: 'intermediate',
	};

	Object.seal(languages);

	expect(Object.isSealed(languages)).toBe(true);
});