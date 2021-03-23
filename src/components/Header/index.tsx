import React, { useState } from 'react';
import { makeStyles, Grid, Typography, Link, Button } from '@material-ui/core';
import { isMobile } from 'react-device-detect';
import Hamburger from 'hamburger-react'

import { MenuList } from './HeaderItemList';

const useStyles = makeStyles((theme) => ({
	main: {
		position: 'fixed',
		top: 0,
		background: '#FFF',
		padding: `${isMobile ? '5px 21px 4px 14px' : '13px 50px'}`,
		zIndex: 999
	},
	right: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	logo: {
		width: `${isMobile ? 43 : 53}px`,
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
	mobileOverlay: {
		background: 'white',
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		height: '100vh'
	},
	mobileTop: {
		padding: '13px 19px',
	},
	mobileItem: {
		marginTop: 30
	},
}));

export default function Header() {
	const styles = useStyles();
	const [isOpen, setOpen] = useState(false)

	const onLaunchApp = () => {
		window.open('https://app.badger.finance', '_self');
	}

	const onLinkClicked = (name : string) => {
		if(name === 'Products' || name === 'Governance' || name === 'Roadmap') {
			setOpen(false)
		}
	}

	return (
		<Grid container alignItems="center" justify="space-between" className={styles.main}>
			<Grid xs={isMobile ? 6 : 2} item>
				<Link href="/" className={styles.logoLink}>
					<Grid container alignItems="center">
						<img draggable={false} alt="Badger Logo" src="/assets/images/logo.png" className={styles.logo} />
						<Typography className={styles.badgerText}>Badger</Typography>
					</Grid>
				</Link>
			</Grid>
			<Grid item xs={isMobile ? 6 : 10}>
				{
					isMobile ? (
						<Grid container justify="flex-end">
							<Hamburger color="#F2A52B" toggled={isOpen} toggle={setOpen} />
						</Grid>
					) : (
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
					)
				}
			</Grid>
			{
				isOpen ? (
					<Grid className={styles.mobileOverlay}>
						<Grid className={styles.mobileTop} container justify="flex-end">
							<Hamburger color="#F2A52B" toggled={isOpen} toggle={setOpen} /> 
						</Grid>
						<Grid item key='Home' container justify="center">
							<Link href='/' className={styles.linkItem}>
								Home
							</Link>
						</Grid>
						{MenuList.map((menuItem) => (
							<Grid item key={menuItem.name} className={styles.mobileItem} container justify="center">
								<Link href={menuItem.link} className={styles.linkItem} onClick={() => onLinkClicked(menuItem.name)}>
									{menuItem.name}
								</Link>
							</Grid>
						))}
						<Grid container justify="center" className={styles.mobileItem}>
							<Button className={styles.launchApp} onClick={onLaunchApp}>
								Launch App
								<img draggable={false} alt="Arrow Icon" src="/assets/images/arrow.png" className={styles.arrowImg} />
							</Button>
						</Grid>
					</Grid>
				) : null
			}			
		</Grid>
	);
}
