import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, Box, Grid } from '@mui/material';
import { FC, useCallback, useState } from 'react';
import Header from '../components/Header/Header';
import Loading from '../components/Loading/Loading';
import Payroll from '../components/Payroll/Payroll';
import Schedule from '../components/Schedule/Schedule';
import ExpandableTable from '../components/Table/ExpandableTable';
import useEmployeeTable from '../components/Table/useEmployeeTable';
import TodayTask from '../components/Task/TodayTask';
import { MainGridContainer, SectionHeader } from './styles';

const Main: FC = () => {
	const [expanded, setExpanded] = useState<string | false>('employeePanel');

	const { isLoading, employeeRows, headerNames } = useEmployeeTable();

	const handleChange = useCallback(
		(panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		},
		[]
	);

	return (
		<MainGridContainer container>
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
				<Accordion expanded={expanded === 'employeePanel'} onChange={handleChange('employeePanel')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls='employees-content'
						id='employees-header'
					>
						<SectionHeader>Employees</SectionHeader>
					</AccordionSummary>
					<Box>
						{isLoading ? (
							<Loading />
						) : (
							<ExpandableTable headerNames={headerNames} rows={employeeRows} />
						)}
					</Box>
				</Accordion>
			</Grid>
			<Grid item xs={12}>
				<Payroll />
			</Grid>
		</MainGridContainer>
	);
};
export default Main;
