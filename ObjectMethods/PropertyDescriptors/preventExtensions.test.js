test('prevents new properties from being added to an object', () => {
	const team = Object.preventExtensions({
		frontend: ['Emma', 'Steve', 'Mike'],
		backend: ['Teresa', 'Adam'],
		QA: ['Bill'],
	});

	team.PM = 'Kevin';

	expect(team.PM).toBe(undefined);
});