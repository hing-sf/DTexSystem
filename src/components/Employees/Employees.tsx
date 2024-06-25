import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MoodIcon from '@mui/icons-material/Mood';
import { ListItemText, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { FC } from 'react';
import { StyledTableCell, StyledTableHeaderCell, StyledTableRow } from './styles';
import { Employee } from './types';

type RowProps = { row: Employee };

const Row: FC<RowProps> = ({ row }) => {
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<StyledTableRow>
				<StyledTableCell>
					<Stack direction='row' spacing={1} sx={{ display: 'flex', alignItems: 'center' }}>
						<MoodIcon />
						<ListItemText id={row.name} primary={`Line item ${row.name}`} />
					</Stack>
				</StyledTableCell>
				<StyledTableCell>{row.employmentId}</StyledTableCell>
				<StyledTableCell>{row.email}</StyledTableCell>
				<StyledTableCell>{row.role}</StyledTableCell>
				<StyledTableCell>{row.status}</StyledTableCell>
				<StyledTableCell align='right'>
					<IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</StyledTableCell>
			</StyledTableRow>
			<StyledTableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout='auto' unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant='h6' gutterBottom component='div'>
								Add content here
							</Typography>
						</Box>
					</Collapse>
				</TableCell>
			</StyledTableRow>
		</React.Fragment>
	);
};

type EmployeeProps = {
	headerNames: string[];
	rows: Employee[];
};

const Employees: FC<EmployeeProps> = ({ headerNames, rows }) => {
	return (
		<TableContainer
			component={Paper}
			sx={{
				boxShadow:
					'boxShadow: 0px 0px 0px 0px rgba(0,0,0,0.2),0px -1px 0px 1px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)',
				mb: 1
			}}
		>
			<Table aria-label='collapsible table'>
				<TableHead>
					<TableRow>
						{headerNames.map((name) => (
							<StyledTableHeaderCell key={name}>{name}</StyledTableHeaderCell>
						))}
						<StyledTableHeaderCell />
					</TableRow>
				</TableHead>
				<TableBody>{rows && rows.map((row) => <Row key={row.name} row={row} />)}</TableBody>
			</Table>
		</TableContainer>
	);
};

export default Employees;
