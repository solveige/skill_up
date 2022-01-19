import { Positions } from './types'
import { isEnumValue } from './utils'
import { NotExistingType } from './CustomError'

test('factory pattern', () => {
	class Developer {
		name: string
		position: Positions

		constructor(name: string) {
			this.name = name;
			this.position = Positions.DEVELOPER;
		}
	}

	class Tester {
		name: string
		position: Positions

		constructor(name: string) {
			this.name = name;
			this.position = Positions.TESTER;
		}
	}

	class EmployeeFactory {
		static positionList = {
			developer: Developer,
			tester: Tester
		};

		create(name: string, type: Positions) {
			if (isEnumValue(Positions, type)) {
				const EmployeeWithType = EmployeeFactory.positionList[type];
				const employee = new EmployeeWithType(name);
				return employee;
			} else {
				throw new NotExistingType("You provided wrong employee type")
			}
		}
	}

	const employeeFactory = new EmployeeFactory();
	const newEmployee = employeeFactory.create("Anna", Positions.DEVELOPER);

	expect(newEmployee.position).toBe(Positions.DEVELOPER);
});