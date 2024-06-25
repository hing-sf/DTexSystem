import { Box, styled, Typography } from '@mui/material';

function getRandomColor() {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return '#' + randomColor.padStart(6, '0');
}

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
