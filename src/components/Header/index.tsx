import React from 'react';
import { makeStyles, Grid, Typography, Link, Button } from '@material-ui/core';

import { MenuList } from './HeaderItemList';

const useStyles = makeStyles((theme) => ({
	main: {
		position: 'fixed',
		top: 0,
		background: '#FFF',
		padding: '13px 50px',
		zIndex: 999
	},
	right: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		width: 53,
	},
	badgerText: {
		fontFamily: 'P2P',
		fontSize: 18,
		color: 'black',
	},
	logoLink: {
		'&:hover': {
			textDecoration: 'none'
		}
	},
	linkItem: {
		fontFamily: 'DMono',
		fontSize: 23,
		color: theme.palette.primary.contrastText,
	},
	launchApp: {
		borderRadius: 15,
		background: 'linear-gradient(180deg, #FFC93F 0%, rgba(255, 255, 255, 0) 79.76%), #E3581F',
		boxShadow: '0px 3px 3px rgba(0, 0, 0, 0.25)',
		height: 42,
		marginLeft: 14,
		padding: '6px 17px',
		'&>span': {
			fontSize: 15,
			textShadow: '1.5px 1.5px 0px rgba(72, 4, 4, 0.6)',
			color: 'white',
			textTransform: 'none'
		},
		'&:hover': {
			background: 'linear-gradient(180deg, #FFC93F 0%, rgba(255, 255, 255, 0) 79.76%), #FF9C54'
		}
	},
	arrowImg: {
		width: 14,
		marginLeft: 10,
	},
}));

export default function Header() {
	const styles = useStyles();

	const onLaunchApp = () => {
		window.open('https://app.badger.finance', '_self');
	}

	return (
		<Grid container alignItems="center" justify="space-between" className={styles.main}>
			<Grid xs={2} item>
				<Link href="/" className={styles.logoLink}>
					<Grid container alignItems="center">
						<img draggable={false} alt="Badger Logo" src="/assets/images/logo.png" className={styles.logo} />
						<Typography className={styles.badgerText}>Badger</Typography>
					</Grid>
				</Link>
			</Grid>
			<Grid item xs={10}>
				<Grid container spacing={5} justify="flex-end" alignItems="center">
					{MenuList.map((menuItem) => (
						<Grid item key={menuItem.name}>
							<Link href={menuItem.link} className={styles.linkItem}>
								{menuItem.name}
							</Link>
						</Grid>
					))}
					<Button className={styles.launchApp} onClick={onLaunchApp}>
						Launch App
						<img draggable={false} alt="Arrow Icon" src="/assets/images/arrow.png" className={styles.arrowImg} />
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
