// import { AppBar, Toolbar, Typography } from '@mui/material';
import { Typography } from '@mui/material';
import { StyledBoxBanner } from '../../pages/styles';

export default function Header() {
	return (
		<StyledBoxBanner component='header'>
			<Typography variant='h6' component='p'>
				Header Dummy component
			</Typography>
		</StyledBoxBanner>
	);
}
