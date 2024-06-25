import { CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import SideNav from './components/Nav/SideNav';
import Main from './pages/Main';

export const MIN_VIEWPORT_WIDTH = 1200;
const MIN_HEIGHT = 960;

export default function App() {
	return (
		<Box sx={{ minHeight: `${MIN_HEIGHT}px`, display: 'flex' }}>
			<CssBaseline />
			<SideNav />
			<Main />
		</Box>
	);
}
