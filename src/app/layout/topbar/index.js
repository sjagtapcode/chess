import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const Topbar = ({
	handleSidebar,
}) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" onClick={handleSidebar}>
					<MenuIcon color="inherit" />
				</IconButton>
				<Typography variant="h6">
					Chess
				</Typography>
			</Toolbar>
		</AppBar>
	)
};

export default Topbar;
