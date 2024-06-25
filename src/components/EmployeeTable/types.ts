export const RoleType = [
	'project-manager',
	'developer',
	'human-resources',
	'product-designer',
	'other'
] as const;

export const StatusType = ['active', 'inactive'] as const;

export type Employee = {
	id: string;
	name: string;
	employmentId: string;
	email: string;
	role: (typeof RoleType)[number];
	status: (typeof StatusType)[number];
};

export type EmployeeProps = {
	headerNames: string[];
	rows: Employee[];
};
