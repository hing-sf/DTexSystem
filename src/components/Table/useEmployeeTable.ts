import { useCallback, useEffect, useState } from 'react';
import { fetchEmployees } from '../../services/employees';
import { Employee } from './types';

const useEmployeeTable = () => {
	const [employeeRows, setEmployeeRows] = useState<Employee[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	useEffect(() => {
		handleFetchEmployees();
	}, []);

	const headerNames = ['Employee name', 'Employement Id', 'Email', 'Role', 'Status'];

	const handleFetchEmployees = useCallback(async () => {
		try {
			setIsLoading(true);
			const response = await fetchEmployees(10);
			setEmployeeRows(response);
		} catch (error) {
			// log error to service like Sentry
			console.log('error', error);
		} finally {
			setIsLoading(false);
		}
	}, []);

	return {
		isLoading,
		employeeRows,
		// handleFetchEmployees,
		headerNames
	};
};

export default useEmployeeTable;
