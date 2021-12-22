function returnContext() {
	return this;
};

test('function called in a global context refer on the global object', () => {
	expect(returnContext()).toBe(global);
});

test('describe function undefined, as it is looking for properties on the global object', () => {
	const ostrohAcademy = {
		name: 'The Ostroh Academy',
		yearFounded: 1576,
	};

	function describe() {
		return `${this.name} was founded in ${this.yearFounded}.`;
	};

	const describeOstrohAcademy = describe();

	const expectedResult = 'undefined was founded in undefined.';

	expect(describeOstrohAcademy).toBe(expectedResult);
});

test('object method that uses this, refer to the properties of the object', () => {
	const name = 'The Ostroh Academy';
	const yearFounded = 1576;

	const expectedResult = `${name} was founded in ${yearFounded}.`;

	const ostrohAcademy = {
		name,
		yearFounded,

		describe() {
			return `${this.name} was founded in ${this.yearFounded}.`;
		},
	};

	const describeOstrohAcademy = ostrohAcademy.describe();

	expect(describeOstrohAcademy).toBe(expectedResult);
});

test('Arrow functions do not have their own this binding. They go up to the next level of execution. In this case it is undefined', () => {
	const name = 'The Ostroh Academy';
	const yearFounded = 1576;

	const expectedResult = `${name} was founded in ${yearFounded}.`;

	const ostrohAcademy = {
		name,
		yearFounded,
		describe: () => `${this.name} was founded in ${this.yearFounded}.`,
	};

	const describeOstrohAcademy = ostrohAcademy.describe();

	expect(describeOstrohAcademy).not.toBe(expectedResult);
});

test('Arrow functions do not have their own this binding. They go up to the next level of execution. In this case it is undefined', () => {
	const name = 'The Ostroh Academy';
	const yearFounded = 1576;

	const expectedResult = `${name} was founded in ${yearFounded}.`;

	const ostrohAcademy = {
		name,
		yearFounded,

		describe: function () {
			return {
				method: () => `${this.name} was founded in ${this.yearFounded}.`
			};
		}
	};

	const describeOstrohAcademy = ostrohAcademy.describe().method();

	expect(describeOstrohAcademy).toBe(expectedResult);
});