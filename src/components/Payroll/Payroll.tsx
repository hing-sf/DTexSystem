import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledBoxBanner } from '../../pages/styles';

const Payrolls: FC = () => {
	return (
		<StyledBoxBanner component='div'>
			<Typography variant='h6' component='p'>
				Payrolls Dummy component
			</Typography>
		</StyledBoxBanner>
	);
}
export default Payrolls;