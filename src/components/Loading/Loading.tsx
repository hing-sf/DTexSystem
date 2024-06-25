import { Box, CircularProgress } from '@mui/material';
import { FC } from 'react';

const Loading: FC = () => {
	return (
		<Box
			sx={{ display: 'flex', minHeight: '200px', justifyContent: 'center', alignItems: 'center' }}
		>
			<CircularProgress />
		</Box>
	);
}
export default Loading;