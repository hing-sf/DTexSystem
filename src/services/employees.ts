import { faker } from '@faker-js/faker';
import { Employee, RoleType, StatusType } from '../components/Table/types';

const DELAY = 1000; // ms

const employeeFactory = (): Employee => {
	return {
		id: faker.string.uuid(),
		name: faker.internet.userName(),
		employmentId: faker.helpers.rangeToNumber({ min: 1000, max: 9999 }).toString(),
		email: faker.internet.email(),
		role: RoleType[faker.helpers.rangeToNumber({ min: 0, max: RoleType.length - 1 })],
		status: StatusType[faker.helpers.rangeToNumber({ min: 0, max: StatusType.length - 1 })]
	};
};

export const createEmployeeList = (num: number): Employee[] => {
	const employees: Employee[] = [];
	for (let i = 0; i < num; i++) {
		employees.push(employeeFactory());
	}
	return employees;
};

/** Fetch employees from an imaginary database, with an operational delay */
export const fetchEmployees = (num: number): Promise<Employee[]> => {
	return new Promise((resolve) => {
		setTimeout(() => resolve(createEmployeeList(num)), DELAY);
	});
};
