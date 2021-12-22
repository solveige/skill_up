test('factory pattern', () => {
	const positions = {
		DEVELOPER: 'Developer',
		QA: 'QA',
	}

	function Developer(name) {
		this.name = name;
		this.position = positions.DEVELOPER;
	}

	function QA(name) {
		this.name = name;
		this.position = positions.QA;
	}

	function EmployeeFactory() {
		this.create = (name, type) => {
			switch (type) {
				case 1: return new Developer(name);
					break;
				case 2: return new QA(name);
					break;
			}
		}
	}

	const employeeFactory = new EmployeeFactory();
	const newEmployee = employeeFactory.create("Anna", 1);

	expect(newEmployee.position).toBe(positions.DEVELOPER);
});