import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
	container: {
		height: '40px',
	},
});

const Player = () => {
	const classes = useStyles();
	return (
		<Grid container direction="row" justify="space-between" className={classes.container}>
			<Grid item>
				Player Info
			</Grid>
			<Grid item>
				Time{(new Date()).toLocaleTimeString()}
			</Grid>
		</Grid>
	);
};

export default Player;
