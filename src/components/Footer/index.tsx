import React from 'react';
import { makeStyles, Grid, Typography, Link, Button } from '@material-ui/core';

import { FooterItemList } from './FooterItemList';

const useStyles = makeStyles((theme) => ({
	main: {
		background: theme.palette.info.main,
		padding: 50,
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
		fontSize: 18,
		color: theme.palette.info.contrastText,
		marginBottom: 20,
	},
	item: {
		marginBottom: 10,
	},
	itemIcon: {
		width: 26,
		marginRight: 8,
	},
	itemText: {
		fontSize: 25,
		color: theme.palette.info.contrastText,
		fontFamily: 'POperator',
	},
	bottomText: {
		fontFamily: 'POperator',
		fontSize: 20,
		lineHeight: '23px',
		color: '#FFF',
		opacity: 0.6,
		textAlign: 'center',
		marginTop: 40,
	},
    stackingPart: {
        paddingTop: 54,
        paddingBottom: 72,
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        zIndex: 10,
    },
    stackingText: {
        fontFamily: 'POperator',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: '23px',
        textAlign: 'center',
        color: '#FFF'
    },
    coinStarImg: {
        width: 42,
        paddingLeft: 5,
    },
    stackingDescription: {
        marginTop: 9,
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '23px',
        color: '#FFF',
        opacity: 0.8,
        textAlign: 'center'
    },
    launchApp: {
        marginTop: 25,
        padding: '21px 71px 20px 68px',
        borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		'&>span': {
			fontSize: 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
    },
}));

export default function Footer() {
	const styles = useStyles();

	return (
		<Grid>
			<Grid className={styles.stackingPart} container direction="column" alignItems="center">
                <Grid container justify="center" alignItems="flex-end">
                    <Typography className={styles.stackingText}>Start Stacking</Typography>
                    <img src="/assets/images/coinStar.png" className={styles.coinStarImg} />
                </Grid>
                <Typography className={styles.stackingDescription}>Open the Badger App and Digg into our Sett Vaults</Typography>
                <Button className={styles.launchApp} onClick={() => window.open('https://app.badger.finance/', '_self')}>LAUNCH OUR APP</Button>
            </Grid>
			<Grid container className={styles.main}>
				<Grid item xs={3}>
					<Grid container alignItems="center" className={styles.logoWrapper}>
						<img alt="Badger Logo" src="/assets/images/logo.png" className={styles.logo} />
						<Typography className={styles.badgerText}>Badger</Typography>
					</Grid>
				</Grid>
				{FooterItemList.map((footerItems) => (
					<Grid key={footerItems.title} item xs={3}>
						<Grid container>
							<Typography className={styles.title}>{footerItems.title}</Typography>
							<Grid container>
								{footerItems.items.map((item) => (
									<Grid container key={item.title}>
										<Link href={item.link}>
											<Grid container direction="row" alignItems="center" className={styles.item}>
												<img
													alt={item.title}
													src={`assets/images/${item.icon}`}
													className={styles.itemIcon}
												/>
												<Typography className={styles.itemText}>{item.title}</Typography>
											</Grid>
										</Link>
									</Grid>
								))}
							</Grid>
						</Grid>
					</Grid>
				))}
				<Grid item xs={12}>
					<Typography className={styles.bottomText}>
						*$BADGER is strictly utilized to govern the Badger DAO and has no monetary value
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
}
