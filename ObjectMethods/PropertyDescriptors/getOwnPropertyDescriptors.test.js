test('method returns all own property descriptors of a given object', () => {
	const person = {
		name: 'Boromir',
		age: 41,
	};

	const descriptors = Object.getOwnPropertyDescriptors(person);

	expect(descriptors.name.writable).toBe(true);
	expect(descriptors.age.configurable).toBe(true);
});