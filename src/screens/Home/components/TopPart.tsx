import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

import InfoText from './InfoText';
import MainBadgerImage from './MainBadgerImage';

const useStyles = makeStyles((theme) => ({
	main: {
		width: '100%',
		padding: '70px 160px 80px 140px',
		background: 'url(assets/images/mainBack.png)',
		backgroundSize: 'cover'
	},
	subMain: {
		maxWidth: 1120
	},
	buildText: {
		marginTop: 76,
		fontSize: 40,
		color: theme.palette.secondary.contrastText,
		lineHeight: '55px',
	},
	description: {
		fontFamily: 'POperator',
		fontSize: 25,
		color: theme.palette.secondary.contrastText,
		fontWeight: 400,
		opacity: 0.8,
		lineHeight: '26.12px',
		letterSpacing: '-0.022em',
		marginTop: 6
	},
	boldDescription: {
		fontWeight: 700,
		letterSpacing: '0.02em'
	},
	viewAudit: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 15,
		padding: '6px 12px',
		'&>span': {
			fontSize: 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
	},
	arrowImg: {
		width: 14,
		marginLeft: 10,
	},
	infoContainer: {
		paddingTop: 35,
		borderTop: '3px solid rgba(255,255,255, 0.3)',
		maxWidth: 1120
	},
}))

export default function TopPart() {
	const styles = useStyles();

	const onAudit = () => {
		window.open('https://badger.finance/wp-content/uploads/2021/01/HAECHI-AUDIT-BadgerDAO-Smart-Contract-Audit-Report-1.pdf', '_blank');
	}
    return (
        <Grid container className={styles.main} justify="center">
            <Grid container className={styles.subMain}>
                <Grid item xs={6}>
                    <Grid container>
                        <Typography className={styles.buildText}>Building Defi for Bitcoin</Typography>
                        <Typography className={styles.description}><span className={styles.boldDescription}>BadgerDAO</span> is a decentralized collective of developers, strategists, and content creators who seek to build and support new Bitcoin-focused products for the DeFi ecosystem</Typography>
                        <Button className={styles.viewAudit} onClick={onAudit}>
                            View our Audits
                            <img alt="Arrow Icon" src="assets/images/arrow1.png" className={styles.arrowImg} />
                        </Button>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify="flex-end">
                        <MainBadgerImage />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" className={styles.infoContainer}>
                <Grid item xs={2}>
                    <InfoText topText='$57.54' bottomText='Badger price' />
                </Grid>
                <Grid item xs={2}>
                    <InfoText topText='7,000+' bottomText='Badger HODLers' />
                </Grid>
                <Grid item xs={2}>
                    <InfoText topText='$42,000' bottomText='DIGG price' />
                </Grid>
                <Grid item xs={2}>
                    <InfoText topText='1000+' bottomText='DIGG HODLers' />
                </Grid>
            </Grid>
        </Grid>
    )
}