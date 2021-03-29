import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
import { isMobile } from 'react-device-detect';

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
        padding: isMobile ? '3px 17px 31px 0px' : '39px 111px 89px 0px',
        overflow: 'hidden'
    },
    insuranceText: {
        fontSize: isMobile ? 13 : 30,
        lineHeight: isMobile ? '20px' : '55px',
        color: 'white',
        borderBottom: '6px solid white',
        marginRight: 135,
        marginBottom: isMobile ? 31 : 73,
        marginTop: isMobile ? 30 : 0,
        textAlign: 'right',
    },
    nexusWrapper: {
        marginLeft: isMobile ? 14 : 120
    },
    nexusText: {
        fontSize: isMobile ? 10 : 18,
        lineHeight: isMobile ? '11px' : '23px',
        color: 'white',
        textAlign: 'right',
        marginBottom: isMobile ? 12 : 0
    },
    nexusDescription: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 25,
        lineHeight: isMobile ? '15px' : '23px',
        letterSpacing: '0em',
        color: '#FFF',
        opacity: 0.9,
        marginTop: isMobile ? 0 : 12,
        width: isMobile ? '100%' : 435,
        textAlign: 'justify'
    },
    nexusIcon: {
        width: isMobile ? 67 : 214,
        height: isMobile ? 67 : 214,
        marginTop: isMobile ? 20 : 0,
    },
    learnMore: {
		borderRadius: isMobile ? 5 : 10,
		background: theme.palette.primary.main,
		height: isMobile ? 17.5 : 42,
		marginTop: 21,
        padding: isMobile ? '3px 6px' : '6px 12px',
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
		'&>span': {
			fontSize: isMobile ? 9.5 : 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
	},
	arrowImg: {
		width: isMobile ? 6.5 : 14,
		marginLeft: isMobile ? 3 : 10,
    },
    yellowBorder: {
        width: isMobile ? 250 : 'calc( 100% + 114px )',
        height: isMobile ? 15 : 42,
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        left: 0,
        top: isMobile ? 460 : 434
    },
    bubbleWrapper: {
        position: 'absolute',
        // left: isMobile ? 45 : 220,
        right: isMobile ? -55 : 165,
        top: isMobile ? 305 : 0
    },
    insurancePeople: {
        position: 'absolute',
        top: isMobile ? 360 : 145,
        right: isMobile ? -120 : -10,
        zIndex: 5,
        width: isMobile ? 95 : 270,
        height: isMobile ? 100 : 290
    },
    insuranceBubble: {
        width: isMobile ? 83 : 233,
    },
    bubbleText: {
        fontFamily: 'P2P',
        fontSize: isMobile ? 8.5 : 25,
        lineHeight: isMobile ? '12px' : '34px',
        position: 'absolute',
        top: isMobile ? 23 : 60,
        left: isMobile ? 15 : 40
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
                <Grid className={styles.leftPanel} item xs={isMobile ? 2 : 4}>
                    <img draggable={false} alt="Insurance Person" src="/assets/images/insurancePeople.png" className={styles.insurancePeople} />
                    <Fade left cascade delay={2000}>
                        <Grid className={styles.bubbleWrapper}>
                            <img draggable={false} alt="Insurance Bubble" src="/assets/images/insuranceBubble.png" className={styles.insuranceBubble} />
                            <Typography className={styles.bubbleText}>Insure your Funds</Typography>
                        </Grid>
                    </Fade>
                    <Grid className={styles.yellowBorder} />
                </Grid>
                <Grid className={styles.rightPanel} item xs={isMobile ? 10 : 8}>
                    <Fade left delay={1000}>
                        <Typography className={styles.insuranceText}>Insurance</Typography>
                    </Fade>
                    <Grid container className={styles.nexusWrapper}>
                        <Grid item xs={isMobile ? 8 : 6} container justify="flex-end">
                            <Typography className={styles.nexusText}>Nexus Mutual</Typography>
                            {
                                isMobile ? (
                                    <Grid>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '-0.05em' }}>Nexus Mutual is a decentralized</Typography>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '0.01em' }}>insurance protocol built on</Typography>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '-0.065em' }}>Ethereum that began in May 2019.</Typography>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '0.04em' }}>Through Nexus, users can</Typography>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '0.045em' }}>purchase covers on their</Typography>
                                        <Typography className={styles.nexusDescription} style={{ letterSpacing: '0.01em' }}>smart contracts using NXM.</Typography>
                                    </Grid>
                                ) : (
                                    <Typography className={styles.nexusDescription}>Nexus Mutual is a decentralized insurance protocol built on Ethereum that began in May 2019. Through Nexus, users can purchase covers on their smart contracts using NXM.</Typography>
                                )
                            }
                            <Button className={styles.learnMore} onClick={onLearnMore}>
                                learn more
                                <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                            </Button>
                        </Grid>
                        <Grid item xs={isMobile ? 4 : 6} container justify="center">
                            <img draggable={false} alt="Nexus Mutual Icon" src="/assets/images/bigNexusLogo.png" className={styles.nexusIcon} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fade>
    )
}