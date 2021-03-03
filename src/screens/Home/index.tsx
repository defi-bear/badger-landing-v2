import React from 'react';
import { Grid } from '@material-ui/core';

import TopPart from './components/TopPart';
import OrangeText from './components/OrangeText';
import Info from './components/Info';
import Products from './components/Products';
import Governance from './components/Governance';
import Roadmap from './components/Roadmap';

export default function Home() {

	return (
		<Grid container>
			<TopPart />
			<OrangeText />
			<Info />
			<Products />
			<Governance />
			<Roadmap />
		</Grid>
	)
}
