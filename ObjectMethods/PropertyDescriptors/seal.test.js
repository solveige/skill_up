test('if Object.seal() method was used, existing properties can not be deleted', () => {
	const team = Object.seal({
		members: 9,
		project: 'EP',
	});

	delete team.project;

	expect(team.project).toBe('EP');
});

test('if Object.seal() method was used, new properties can not be added', () => {
	const bill = Object.seal({
		drinks: 40,
		meals: 60,
	});

	bill.desserts = 100;

	expect(bill.desserts).toBe(undefined);
});

test('even if Object.seal() method was used, property values still can be changed if they are writable', () => {
	const bill = Object.seal({
		drinks: 40,
		meals: 60,
	});

	bill.drinks = 100;

	expect(bill.drinks).toBe(100);
});
