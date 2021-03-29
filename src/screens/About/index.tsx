import React from 'react';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import ReactPlayer from 'react-player';
import { isMobile } from 'react-device-detect';

import AboutAudit from './components/aboutAudit';
import InsuranceAudit from './components/insuranceAudit';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: isMobile ? 13 : 30,
        lineHeight: '55px',
        paddingTop: isMobile ? 13 : 50,
        textAlign: 'center',
    },
    topMain: {
        paddingBottom: isMobile ? 30 : 98,
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)',
    },
    topMainWrapper: {
        marginTop: 58,
        maxWidth: 1130,
    },
    bigBadger: {
        width: isMobile ? 150 : 257,
        height: isMobile ? 150 : 257,
        marginTop: isMobile ? 36 : 14,
    },
    description: {
        fontFamily: 'POperator',
        fontWeight: 'normal',
        fontSize: isMobile ? 17 : 28,
        lineHeight: isMobile ? '20px' : '35px',
        opacity: 0.7,
        marginLeft: isMobile ? 0 : 49,
        flex: 1,
        textIndent: 35,
        textAlign: 'justify',
        padding: isMobile ? '0px 35px' : '0px',
        letterSpacing: isMobile ? '-0.06em' : 'initial',
    },
    boldText: {
        fontWeight: 700
    },
    knowText: {
        fontSize: isMobile ? 13 : 23,
        lineHeight: isMobile ? '20px' : '23px',
        letterSpacing: '0.145em',
        textAlign: 'center',
        marginTop: isMobile ? 0 : 78
    },
    hideText: {
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: isMobile ? 14.5 : 25,
        lineHeight: isMobile ? '13px' : '23px',
        letterSpacing: '0.3em',
        opacity: 0.7,
        marginTop: isMobile ? 10 : 14,
        textAlign: 'center'
    },
    reviewCode: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: isMobile ? 22 : 42,
		marginTop: isMobile ? 20 : 28,
		padding: '6px 12px',
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
		'&>span': {
			fontSize: isMobile ? 11.7 : 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
	},
	arrowImg: {
		width: isMobile ? 10 : 14,
		marginLeft: isMobile ? 6.5 : 10,
    },
    bigBorder: {
        width: isMobile ? 261 : 1089,
        height: isMobile ? 3.5 : 14,
        backgroundColor: theme.palette.secondary.main,
        marginTop: isMobile ? 30 : 71,
        opacity: 0.3,
        marginBottom: isMobile ? 30 : 87,
    },
    infoContainer: {
        paddingTop: isMobile ? 30 : 0
    }
}))

export default function About() {
    const styles = useStyles();
    const description = 'Builders are a distributed team of developers, founders, content creators, and strategists, who all believe in the power of Bitcoin as a digital store of value, and DeFi as a means of permissionlessly earning yield on Bitcoin. The team is being led by Chris Spadafora, a long term crypto enthusiast, investor, founder of Angelrock, host of Crypto After Dark poker and philanthropy through Pioneerclub.io. Many more Badgers have joined him since the inception of BadgerDAO, and now compose a community where the DAO decides on the direction & production of BadgerDAO’s products.';
    const onReview = () => {
        window.open('https://github.com/badger-Finance')
    }

    return (
        <Grid>
            {
                !isMobile ? (
                    <>
                        <Typography className={styles.title}>About The Badgers</Typography>
                        <Grid className={styles.topMain} container justify="center">
                            <Grid className={styles.topMainWrapper} container direction="row">
                                <img draggable={false} alt="Badger Logo" src="/assets/images/bigBadger.png" className={styles.bigBadger} />
                                <Typography className={styles.description}>The <span className={styles.boldText}>Badger</span> {description}</Typography>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <Grid container alignItems="center" direction="column" className={styles.topMain}>
                        <img draggable={false} alt="Badger Logo" src="/assets/images/bigBadger.png" className={styles.bigBadger} />
                        <Typography className={styles.title}>About The Badgers</Typography>
                        <Typography className={styles.description}>The <span className={styles.boldText}>Badger</span> {description}</Typography>
                    </Grid>
                )
            }
            <Grid container alignItems="center" direction="column" className={styles.infoContainer}>
                {
                    isMobile ? (
                        <>
                            <Typography className={styles.knowText}>Know Us</Typography>
                            <Typography className={styles.knowText}>And Know The Code</Typography>
                        </>
                    ) : (
                        <>
                            <Typography className={styles.knowText}>Know Us And Know The Code</Typography>
                        </>
                    )
                }
                
                <Typography className={styles.hideText}>BADGERS NEVER HIDE</Typography>
                <Button className={styles.reviewCode} onClick={onReview}>
                    Review the Code
                    <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                </Button>
                <Grid className={styles.bigBorder} />
                <ReactPlayer controls url='https://www.youtube.com/watch?v=7GVz9La2L9w' width={isMobile ? 240 : 835} height={isMobile ? 124 : 430} />
            </Grid>
            <AboutAudit />
            <InsuranceAudit />
        </Grid>
    )
}