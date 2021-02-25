import React from 'react';
import { Grid } from '@material-ui/core';

import TopPart from './components/TopPart';
import OrangeText from './components/OrangeText';
import Info from './components/Info';

export default function Home() {

	return (
		<Grid container>
			<TopPart />
			<OrangeText />
			<Info />
		</Grid>
	)
}
