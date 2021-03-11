import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

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
    insurancePeople: {
        position: 'absolute',
        width: 424,
        top: -56,
        right: -10,
        zIndex: 5
    },
    yellowBorder: {
        width: 'calc( 100% + 114px )',
        height: 42,
        backgroundColor: '#FFDD29',
        position: 'absolute',
        left: 0,
        top: 384
    }
}))

export default function InsuranceAudit() {
    const styles = useStyles();

    const onLearnMore = () => {
        window.open('https://app.nexusmutual.io/cover/buy/get-quote?address=0x6354E79F21B56C11f48bcD7c451BE456D7102A36', '_target');
    }

    return (
        <Grid container className={styles.main}>
            <Grid className={styles.leftPanel} item xs={4}>
                <img alt="Insurance Person" src="/assets/images/insurancePeople.png" className={styles.insurancePeople} />
                <Grid className={styles.yellowBorder} />
            </Grid>
            <Grid className={styles.rightPanel} item xs={8}>
                <Typography className={styles.insuranceText}>Insurance</Typography>
                <Grid container className={styles.nexusWrapper}>
                    <Grid item xs={6} container justify="flex-end">
                        <Typography className={styles.nexusText}>Nexus Mutual</Typography>
                        <Typography className={styles.nexusDescription}>Nexus Mutual is a decentralized insurance protocol built on Ethereum that began in May 2019. Through Nexus, users can purchase covers on their smart contracts using NXM.</Typography>
                        <Button className={styles.learnMore} onClick={onLearnMore}>
                            learn more
                            <img alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                        </Button>
                    </Grid>
                    <Grid item xs={6} container justify="center">
                        <img alt="Nexus Mutual Icon" src="/assets/images/bigNexusLogo.png" className={styles.nexusIcon} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}