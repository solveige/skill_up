test('factory pattern', () => {
	const positions = {
		DEVELOPER: 'developer',
		TESTER: 'tester',
	}

	class Developer {
		constructor(name) {
			this.name = name;
			this.position = positions.DEVELOPER;
		}
	}

	class Tester {
		constructor(name) {
			this.name = name;
			this.position = positions.TESTER;
		}
	}

	class EmployeeFactory {
		static positionList = {
			developer: Developer,
			tester: Tester
		}

		create(name, type) {
			const EmployeeWithType = EmployeeFactory.positionList[type]
			const employee = new EmployeeWithType(name)
			return employee
		}
	}

	const employeeFactory = new EmployeeFactory();
	const newEmployee = employeeFactory.create("Anna", positions.DEVELOPER);

	expect(newEmployee.position).toBe(positions.DEVELOPER);
});