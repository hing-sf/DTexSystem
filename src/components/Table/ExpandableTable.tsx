import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';
import Row from './Row';
import { StyledTableHeaderCell } from './styles';
import { Employee } from './types';

type ExpandableTableProps = {
	headerNames: string[];
	rows: Employee[];
};

const ExpandableTable: FC<ExpandableTableProps> = ({ headerNames, rows }) => {
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

export default ExpandableTable;
