import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledBox } from '../../pages/styles';

const TodayTask: FC = () => {
	return (
		<StyledBox>
			<Typography variant='h6' component='p'>
				TodayTask Dummy component
			</Typography>
		</StyledBox>
	);
}

export default TodayTask