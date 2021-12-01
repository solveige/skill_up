const team = Object.freeze({
	frontend: ['Emma', 'Steve', 'Mike'],
	backend: ['Teresa', 'Adam'],
	QA: ['Bill'],
});

test('new properties can not be added if object is frozen', () => {
	team.PM = 'Kevin';

	expect(team.PM).toBe(undefined);
});

test('existing properties can not be removed if object is frozen', () => {
	delete team.QA;

	expect(team.QA).toStrictEqual(['Bill']);
});

test('values of properties can not changed if object is frozen', () => {
	team.QA = ['Will'];

	expect(team.QA).toStrictEqual(['Bill']);
});