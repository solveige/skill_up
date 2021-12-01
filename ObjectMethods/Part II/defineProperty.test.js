test('Object.defineProperty() method defines a new property directly on an object', () => {
	const fellowshipOfTheRing = {
		hobbits: ['Frodo', 'Sam', 'Pippin', 'Merry'],
		mens: ['Aragorn', 'Boromir'],
		elf: ['Legolas'],
		dwarf: ['Gimli'],
	};

	Object.defineProperty(fellowshipOfTheRing, 'wizard', {
		value: ['Gandalf'],
	});

	expect(fellowshipOfTheRing.wizard).toStrictEqual(['Gandalf']);
});

test('Object.defineProperty() method can modify existing property of an object', () => {
	const fellowshipOfTheRing = {
		hobbits: ['Frodo', 'Sam', 'Pippin', 'Merry'],
		mens: ['Aragorn', 'Boromir'],
		elf: ['Legolas'],
		dwarf: ['Gimli'],
		wizard: ['Gandalf'],
	};

	Object.defineProperty(fellowshipOfTheRing, 'wizard', {
		value: ['Gandalf the Grey'],
	});

	expect(fellowshipOfTheRing.wizard).toStrictEqual(['Gandalf the Grey']);
});

test('Object.defineProperty() method can modify property configuration', () => {
	const fellowshipOfTheRing = {
		hobbits: ['Frodo', 'Sam', 'Pippin', 'Merry'],
		mens: ['Aragorn', 'Boromir'],
		elf: ['Legolas'],
		dwarf: ['Gimli'],
		wizard: ['Gandalf the Gray'],
	};

	Object.defineProperty(fellowshipOfTheRing, 'wizard', {
		value: ['Gandalf the White'],
		writable: false,
	});

	const descriptor = Object.getOwnPropertyDescriptor(fellowshipOfTheRing, 'wizard');

	expect(descriptor.writable).toBe(false);
});