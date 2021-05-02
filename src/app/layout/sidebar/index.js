import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import GamepadIcon from '@material-ui/icons/Gamepad';
import Profile from './Profile';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
	container: {
		width: '300px',
	},
});

const Sidebar = ({
	open,
	handleClose,
}) => {
	const classes = useStyles();
	const history = useHistory();
	const options = [
		{
			name: 'Play',
			icon: <PlayCircleFilledWhiteIcon />,
			handleClick: () => {
				history.push('/');
				handleClose();
			},
		},
		{
			name: 'Players',
			icon: <GamepadIcon />,
			handleClick: () => {
				history.push('/players');	
				handleClose();
			},
		},
	];
	
	return (
		<Drawer
			open={open}
			onClose={handleClose}
		>
			<Profile />
			<Divider />
			<List className={classes.container}>
				{options.map(({ name, icon, handleClick }) => (
					<ListItem button onClick={handleClick} key={name}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default Sidebar;
