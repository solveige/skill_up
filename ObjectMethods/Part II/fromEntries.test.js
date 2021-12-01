test('method transforms a list of key-value pairs into an object', () => {
	const personalData = [['name', 'Ema'], ['city', 'Dublin']];

	const expectedResult = {
		name: 'Ema',
		city: 'Dublin',
	};

	expect(Object.fromEntries(personalData)).toStrictEqual(expectedResult);
});