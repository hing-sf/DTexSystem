import { Box, CircularProgress } from '@mui/material';

export default function Loading() {
	return (
		<Box
			sx={{ display: 'flex', minHeight: '200px', justifyContent: 'center', alignItems: 'center' }}
		>
			<CircularProgress />
		</Box>
	);
}
