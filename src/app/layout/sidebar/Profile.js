import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	image: {
		width: '150px',
		height: '150px',
	}
});

const Profile = () => {
	const classes = useStyles();
	return (
		<div>
			<Box textAlign="center">
				<AccountCircleIcon className={classes.image} color="primary" />
			</Box>
		</div>
	);
};

export default Profile;
