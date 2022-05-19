import { positions, Positions } from './types'
import { NotExistingEmployeeType } from './CustomError'

test('factory pattern', () => {
	class Developer {
		name: string;
		position: Positions;

		constructor(name: string) {
			this.name = name;
			this.position = 'developer';
		}
	}

	class Tester {
		name: string;
		position: Positions;

		constructor(name: string) {
			this.name = name;
			this.position = 'manager';
		}
	}

	class EmployeeFactory {
		static positionList = {
			developer: Developer,
			tester: Tester
		};

		create(name: string, type: Positions) {
			if (positions.includes(type)) {
				const EmployeeWithType = EmployeeFactory.positionList[type];
				const employee = new EmployeeWithType(name);
				return employee;
			} 
			else {
				throw new NotExistingEmployeeType("You provided wrong employee type");
			}
		}
	}

	const employeeFactory = new EmployeeFactory();
	const newEmployee = employeeFactory.create("Anna", 'developer');

	expect(newEmployee.position).toBe('developer');
});