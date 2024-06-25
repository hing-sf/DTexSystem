import { Typography } from '@mui/material';
import { FC } from 'react';
import { StyledBoxBanner } from '../../pages/styles';

const Header: FC = () => {
	return (
		<StyledBoxBanner component='header'>
			<Typography variant='h6' component='p'>
				Header Dummy component
			</Typography>
		</StyledBoxBanner>
	);
}

export default Header;