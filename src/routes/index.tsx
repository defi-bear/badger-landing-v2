import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../screens/Home';
import About from '../screens/About';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Wrapper from './components/Wrapper';

export default function routes(): React.ReactElement {
	return (
		<BrowserRouter>
			<Header />
			<Wrapper>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/about">
						<About />
					</Route>
				</Switch>
			</Wrapper>
			<Footer />
		</BrowserRouter>
	);
}
