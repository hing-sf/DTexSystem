import { Box, Grid, styled, Typography } from '@mui/material';
import { MIN_VIEWPORT_WIDTH } from '../App';
import { DRAWER_WIDTH } from '../components/Nav/SideNav';

const getRandomColor = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return '#' + randomColor.padStart(6, '0');
};

export const MainGridContainer = styled(Grid)(() => ({
	minWidth: `${MIN_VIEWPORT_WIDTH - DRAWER_WIDTH}px`,
	p: 1,
	display: 'initial'
}));

export const StyledBox = styled(Box)(() => ({
	height: '300px',
	backgroundColor: getRandomColor(),
	flex: '1 1 0px',
	marginBottom: '0.5rem',
	padding: '1rem'
}));

export const StyledBoxBanner = styled(Box)(() => ({
	height: '150px',
	backgroundColor: getRandomColor(),
	marginBottom: '0.5rem',
	padding: '1rem'
}));

export const SectionHeader = styled(Typography)(() => ({
	fontWeight: 700
}));
