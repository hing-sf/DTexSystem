import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Box, Grid } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { MIN_VIEWPORT_WIDTH } from '../App';
import EmployeeTable from '../components/EmployeeTable/EmployeeTable';
import { Employee } from '../components/EmployeeTable/types';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import { DRAWER_WIDTH } from '../components/Nav/SideNav';
import Payroll from '../components/Payroll/Payroll';
import Schedule from '../components/Schedule/Schedule';
import TodayTask from '../components/Task/TodayTask';
import { fetchEmployees } from '../services/employees';
import { SectionHeader } from './styles';

const Main: FC = () => {
	const [employeeRows, setEmployeeRows] = useState<Employee[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [expanded, setExpanded] = useState<string | false>('panel1');

	useEffect(() => {
		handleFetchEmployees();
	}, []);

	const handleFetchEmployees = async () => {
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
	};

	const headerNames = ['Employee name', 'Employement Id', 'Email', 'Role', 'Status'];

	const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<Grid
			container
			sx={{ minWidth: `${MIN_VIEWPORT_WIDTH - DRAWER_WIDTH}px`, p: 1, display: 'initial' }}
		>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<Box sx={{ display: 'flex', gap: '0.5rem' }}>
					<TodayTask />
					<Schedule />
				</Box>
			</Grid>

			<Grid item xs={12}>
				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='employees-content'
						id='employees-header'
					>
						<SectionHeader>Employees</SectionHeader>
					</AccordionSummary>
					<Box>
						{isLoading ? <Loading /> : <EmployeeTable headerNames={headerNames} rows={employeeRows} />}
					</Box>
				</Accordion>
			</Grid>
			<Grid item xs={12}>
				<Payroll />
			</Grid>
		</Grid>
	);
};
export default Main;
