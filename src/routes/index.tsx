import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../screens/Home';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function routes(): React.ReactElement {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route path={'/'} component={Home} />
			</Switch>
			<Footer />
		</BrowserRouter>
	);
}
