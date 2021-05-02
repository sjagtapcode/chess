import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../pages/home';
import Players from '../pages/players';

const Routes = () => {
	return (
		<Switch>
			<Route path="/players">
				<Players />
			</Route>
			<Route path="/">
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
