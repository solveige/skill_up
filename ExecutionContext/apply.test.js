test('with apply we can invoke a function with a specified this context', () => {
	const ostrohAcademy = {
		name: 'The Ostroh Academy',
		yearFounded: 1576,
	};

	function describe() {
		return `${this.name} was founded in ${this.yearFounded}.`;
	};

	const describeOstrohAcademy = describe.apply(ostrohAcademy);

	const expectedResult = 'The Ostroh Academy was founded in 1576.';

	expect(describeOstrohAcademy).toBe(expectedResult);
});

test('using apply we pass arguments as an array', () => {
	const ostrohAcademy = {
		name: 'The Ostroh Academy',
		yearFounded: 1576,
	};

	function describe(foundedBy) {
		return `${this.name} was founded in ${this.yearFounded} by ${foundedBy}.`;
	};

	const describeOstrohAcademy = describe.apply(ostrohAcademy, ['Konstantyn Wasyl Ostrogski']);

	const expectedResult = 'The Ostroh Academy was founded in 1576 by Konstantyn Wasyl Ostrogski.';

	expect(describeOstrohAcademy).toBe(expectedResult);
});

test('If this arg is passed to call on invocation of an arrow function it will be ignored', () => {
	const ostrohAcademy = {
		name: 'The Ostroh Academy',
		yearFounded: 1576,
	};

	const describe = () => `${this.name} was founded in ${this.yearFounded}.`;

	const describeOstrohAcademy = describe.apply(ostrohAcademy);

	const expectedResult = 'undefined was founded in undefined.';

	expect(describeOstrohAcademy).toBe(expectedResult);
});