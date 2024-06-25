import { TableRow } from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

export const StyledTableHeaderCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: `var(--table-header-bg)`,
		color: `var(--table-header-text)`
	},
	[`&.${tableCellClasses.root}`]: {
		padding: '0.75rem 1rem'
	},
	fontWeight: 700,
	textTransform: 'uppercase'
}));

export const StyledTableCell = styled(TableCell)(() => ({
	[`&.${tableCellClasses.root}`]: {
		padding: '0.75rem 1rem',
		borderBottom: 'none'
	}
}));

export const StyledTableRow = styled(TableRow)(() => ({
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));
