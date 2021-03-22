import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';

import AboutAudit from './components/aboutAudit';
import InsuranceAudit from './components/insuranceAudit';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 30,
        lineHeight: '55px',
        paddingTop: 50,
        textAlign: 'center',
    },
    topMain: {
        paddingBottom: 98,
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)',
    },
    topMainWrapper: {
        marginTop: 58,
        maxWidth: 1130,
    },
    bigBadger: {
        width: 257,
        height: 257,
        marginTop: 14,
    },
    description: {
        fontFamily: 'POperator',
        fontWeight: 'normal',
        fontSize: 28,
        lineHeight: '35px',
        opacity: 0.7,
        marginLeft: 49,
        flex: 1,
        textIndent: 35,
        textAlign: 'justify'
    },
    boldText: {
        fontWeight: 700
    },
    knowText: {
        fontSize: 23,
        lineHeight: '23px',
        letterSpacing: '0.145em',
        textAlign: 'center',
        marginTop: 78
    },
    hideText: {
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '23px',
        letterSpacing: '0.3em',
        opacity: 0.7,
        marginTop: 14,
        textAlign: 'center'
    },
    reviewCode: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 28,
		padding: '6px 12px',
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
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
    bigBorder: {
        width: 1089,
        height: 14,
        backgroundColor: theme.palette.secondary.main,
        marginTop: 71,
        opacity: 0.3,
        marginBottom: 87,
    },
}))

export default function About() {
    const styles = useStyles();

    const onReview = () => {

    }

    return (
        <Grid>
            <Typography className={styles.title}>About The Badgers</Typography>
            <Grid className={styles.topMain} container justify="center">
                <Grid className={styles.topMainWrapper} container direction="row">
                    <img draggable={false} alt="Badger Logo" src="/assets/images/bigBadger.png" className={styles.bigBadger} />
                    <Typography className={styles.description}>The <span className={styles.boldText}>Badger</span> Builders are a distributed team of developers, founders, content creators, and strategists, who all believe in the power of Bitcoin as a digital store of value, and DeFi as a means of permissionlessly earning yield on Bitcoin. The team is being led by Chris Spadafora, a long term crypto enthusiast, investor, founder of Angelrock, host of Crypto After Dark poker and philanthropy through Pioneerclub.io. Many more Badgers have joined him since the inception of Badger DAO, and now compose a community where the DAO decides on the direction & production of Badger DAO’s products.</Typography>
                </Grid>
            </Grid>
            <Grid container alignItems="center" direction="column">
                <Typography className={styles.knowText}>Know Us And Know The Code</Typography>
                <Typography className={styles.hideText}>BADGERS NEVER HIDE</Typography>
                <Button className={styles.reviewCode} onClick={onReview}>
                    Review the Code
                    <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                </Button>
                <Grid className={styles.bigBorder} />
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=7GVz9La2L9w' width={835} height={430} /> */}
            </Grid>
            <AboutAudit />
            <InsuranceAudit />
        </Grid>
    )
}