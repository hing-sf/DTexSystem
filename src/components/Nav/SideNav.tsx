import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { FC } from 'react';

export const DRAWER_WIDTH = 240;

 const SideNav: FC = () => {
	return (
		<Drawer
			sx={{
				width: DRAWER_WIDTH,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: DRAWER_WIDTH,
					boxSizing: 'border-box'
				}
			}}
			variant='permanent'
			anchor='left'
		>
			<Toolbar />
			<Divider />
			<List>
				{['Employee', 'Onboarding', 'Leave', 'Time tracking'].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InsertEmoticonIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{['All mail', 'Trash', 'Spam'].map((text) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<InsertEmoticonIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
}

export default SideNav;