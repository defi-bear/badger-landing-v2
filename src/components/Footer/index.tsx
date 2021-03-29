import React from 'react';
import { makeStyles, Grid, Typography, Link, Button } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

import { FooterItemList } from './FooterItemList';

const useStyles = makeStyles((theme) => ({
	main: {
		background: theme.palette.info.main,
		padding: isMobile ? '22px 42px 46px 41px' : 50,
	},
	logoWrapper: {
		paddingTop: 8,
	},
	logo: {
		width: 53,
	},
	badgerText: {
		fontFamily: 'P2P',
		fontSize: 18,
		color: 'white',
	},
	title: {
		fontSize: isMobile ? 12.65 : 18,
		color: theme.palette.info.contrastText,
		marginBottom: 20,
	},
	item: {
		marginBottom: 10,
	},
	newsIcon: {
		width: 26,
		marginRight: 11,
		marginLeft: -3,
	},
	itemIcon: {
		width: 26,
		marginRight: 8,
	},
	itemText: {
		fontSize: isMobile ? 17.6 : 25,
		color: theme.palette.info.contrastText,
		fontFamily: 'POperator',
	},
	bottomText: {
		fontFamily: 'POperator',
		fontSize: isMobile ? 14 : 20,
		lineHeight: isMobile ? '16px' : '23px',
		color: '#FFF',
		opacity: 0.6,
		textAlign: 'center',
		marginTop: isMobile ? 35 : 40,
	},
    stackingPart: {
        paddingTop: isMobile ? 20 : 54,
        paddingBottom: isMobile ? 38 : 72,
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        zIndex: 10,
    },
    stackingText: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 16 : 30,
        fontWeight: 'bold',
        lineHeight: isMobile ? '12px' : '23px',
        textAlign: 'center',
		color: '#FFF',
		marginLeft: 35
    },
    coinStarImg: {
        width: isMobile ? 22 : 42,
        paddingLeft: 5,
    },
    stackingDescription: {
        marginTop: 9,
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: isMobile ? 13.5 : 25,
        lineHeight: isMobile ? '12px' : '23px',
        color: '#FFF',
        opacity: 0.8,
        textAlign: 'center'
    },
    launchApp: {
        marginTop: isMobile ? 13 : 25,
        padding: isMobile ? '11px 38px 11px 36px' : '21px 71px 20px 68px',
        borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
		'&>span': {
			fontSize: isMobile ? 8 : 15,
			lineHeight: isMobile ? 12 : 23,
			color: '#651A1A',
			fontFamily: 'P2P',
			textTransform: 'none',
		},
	},
	footerItem: {
		marginTop: isMobile ? 35 : 0,
	}
}));

export default function Footer() {
	const styles = useStyles();

	return (
		<Grid>
			<Grid className={styles.stackingPart} container direction="column" alignItems="center">
                <Grid container justify="center" alignItems="flex-end">
                    <Typography className={styles.stackingText}>Start Stacking</Typography>
                    <img draggable={false} src="/assets/images/coinStar.png" className={styles.coinStarImg} />
                </Grid>
                <Typography className={styles.stackingDescription}>Open the Badger App and Digg into our Sett Vaults</Typography>
                <Button className={styles.launchApp} onClick={() => window.open('https://app.badger.finance/', '_self')}>LAUNCH OUR APP</Button>
            </Grid>
			<Grid container className={styles.main}>
				<Grid item xs={isMobile ? 12 : 3}>
					<Grid container alignItems="center" justify={isMobile ? "center" : "flex-start"} className={styles.logoWrapper}>
						<img draggable={false} alt="Badger Logo" src="/assets/images/logo.png" className={styles.logo} />
						<Typography className={styles.badgerText}>Badger</Typography>
					</Grid>
				</Grid>
				{FooterItemList.map((footeritems) => (
					<Grid key={footeritems.title} item xs={isMobile ? 12 : 3} className={styles.footerItem}>
						<Grid container justify={isMobile ? 'center' : 'flex-start'}>
							<Typography className={styles.title}>{footeritems.title}</Typography>
							<Grid container justify={isMobile ? "center" : "flex-start"}>
								<Grid>
									{footeritems.items.map((item) => (
										<Grid key={item.title}>
											<Link href={item.link} target="_blank">
												<Grid container direction="row" alignItems="center" className={styles.item}>
													<img
														draggable={false}
														alt={item.title}
														src={`/assets/images/${item.icon}`}
														className={item.title === 'Read our Newsletter' ? styles.newsIcon : styles.itemIcon}
													/>
													<Typography className={styles.itemText}>{item.title}</Typography>
												</Grid>
											</Link>
										</Grid>
									))}
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography className={styles.bottomText}>
						*$BADGER is strictly utilized to govern the BadgerDAO and has no monetary value
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
