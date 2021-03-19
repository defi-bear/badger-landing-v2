import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: 115,
        marginBottom: 171,
    },
    leftPanel: {
        position: 'relative',
    },
    rightPanel: {
        marginTop: 56,
        backgroundColor: theme.palette.secondary.main,
        padding: '39px 111px 89px 0px',
    },
    insuranceText: {
        fontSize: 30,
        lineHeight: '55px',
        color: 'white',
        borderBottom: '6px solid white',
        marginRight: 'calc( 50% - 135px )',
        marginBottom: 73,
        textAlign: 'right',
    },
    nexusWrapper: {
        marginLeft: 120
    },
    nexusText: {
        fontSize: 18,
        lineHeight: '23px',
        color: 'white',
        textAlign: 'right',
        marginRight: 50
    },
    nexusDescription: {
        fontFamily: 'POperator',
        fontSize: 25,
        lineHeight: '23px',
        letterSpacing: '0.025em',
        color: '#FFF',
        opacity: 0.9,
        marginTop: 12,
    },
    nexusIcon: {
        width: 214
    },
    learnMore: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 21,
        padding: '6px 12px',
        marginRight: 50,
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
    yellowBorder: {
        width: 'calc( 100% + 114px )',
        height: 42,
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        left: 0,
        top: 434
    },
    bubbleWrapper: {
        position: 'absolute',
        left: 220,
        top: 0
    },
    insurancePeople: {
        position: 'absolute',
        top: 145,
        right: -10,
        zIndex: 5,
        width: 270,
        height: 290
    },
    insuranceBubble: {
        width: 233,
    },
    bubbleText: {
        fontFamily: 'P2P',
        fontSize: 25,
        lineHeight: '34px',
        position: 'absolute',
        top: 60,
        left: 40
    }
}))

export default function InsuranceAudit() {
    const styles = useStyles();

    const onLearnMore = () => {
        window.open('https://app.nexusmutual.io/cover/buy/get-quote?address=0x6354E79F21B56C11f48bcD7c451BE456D7102A36', '_target');
    }

    return (
        <Fade bottom>
            <Grid container className={styles.main}>
                <Grid className={styles.leftPanel} item xs={4}>
                    <img draggable={false} alt="Insurance Person" src="/assets/images/insurancePeople.png" className={styles.insurancePeople} />
                    <Bounce left cascade delay={2000}>
                        <Grid className={styles.bubbleWrapper}>
                            <img draggable={false} alt="Insurance Bubble" src="/assets/images/insuranceBubble.png" className={styles.insuranceBubble} />
                            <Typography className={styles.bubbleText}>Insure your Funds</Typography>
                        </Grid>
                    </Bounce>
                    <Grid className={styles.yellowBorder} />
                </Grid>
                <Grid className={styles.rightPanel} item xs={8}>
                    <Fade left delay={1000}>
                        <Typography className={styles.insuranceText}>Insurance</Typography>
                    </Fade>
                    <Grid container className={styles.nexusWrapper}>
                        <Grid item xs={6} container justify="flex-end">
                            <Typography className={styles.nexusText}>Nexus Mutual</Typography>
                            <Typography className={styles.nexusDescription}>Nexus Mutual is a decentralized insurance protocol built on Ethereum that began in May 2019. Through Nexus, users can purchase covers on their smart contracts using NXM.</Typography>
                            <Button className={styles.learnMore} onClick={onLearnMore}>
                                learn more
                                <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                            </Button>
                        </Grid>
                        <Grid item xs={6} container justify="center">
                            <img draggable={false} alt="Nexus Mutual Icon" src="/assets/images/bigNexusLogo.png" className={styles.nexusIcon} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
    )
}