import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../home';
import Result from '../result';
import NotFound from '../notFound';

const Main = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/result" component={Result} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};

export default Main;