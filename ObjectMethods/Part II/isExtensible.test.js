test('check if an object is extensible, returns boolean', () => {
	const emptyObj = {};
	expect(Object.isExtensible(emptyObj)).toBe(true);
});

test('object becomes non-extensible, if Object.preventExtensions() method was used', () => {
	const emptyObj = {};
	Object.preventExtensions(emptyObj);
	expect(Object.isExtensible(emptyObj)).toBe(false);
});

test('objects created with Object.seal() method are non-extensible', () => {
	const createdWithSeal = Object.seal({});
	expect(Object.isExtensible(createdWithSeal)).toBe(false);
});

test('objects created with Object.freeze() method are non-extensible', () => {
	const createdWithSeal = Object.seal({});
	expect(Object.isExtensible(createdWithSeal)).toBe(false);
});