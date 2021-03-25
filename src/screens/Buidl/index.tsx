import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(() => ({
    main: {

    },
    mainWrapper: {
        maxWidth: isMobile ? 'calc( 100% - 70px )' : 1130,
    },
    hammerIcon: {
        width: isMobile ? 27.8 : 79.5
    },
    buildText: {
        fontSize: isMobile ? 10.5 : 30,
        lineHeight: isMobile ? '19px' : '55px',
        color: 'black',
    },
    top: {
        marginTop: isMobile ? 20 : 76
    },
    description: {
        marginTop: isMobile ? 20 : 58,
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 28,
        lineHeight: isMobile ? '20px' : '35px',
        opacity: 0.7,
        textIndent: 30,
        textAlign: 'justify',
        letterSpacing: '-0.04em'
    },
    waysText: {
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: isMobile ? 17 : 28,
        lineHeight: '35px',
        opacity: 0.7,
        marginTop: isMobile ? 15 : 57
    },
    item: {
        marginTop: isMobile ? 25 : 50
    },
    star: {
        width: isMobile ? 13.7 : 25,
        height: isMobile ? 11.1 : 20,
        marginLeft: isMobile ? 4.3 : 29,
        marginTop: isMobile ? 4 : 11
    },
    itemRight: {
        width: isMobile ? 275 : 1056,
        marginLeft: isMobile ? 4.3 : 20,
    },
    itemTitle: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 28,
        lineHeight: isMobile ? '20px' : 'initial',
        fontWeight: 'bold'
    },
    itemLink: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 28,
        lineHeight: isMobile ? '20px' : 'initial',
        color: '#d8a24d'
    },
    itemText: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 28,
        lineHeight: isMobile ? '20px' : 'initial',
        opacity: 0.7,
        letterSpacing: '-0.03em',
        textAlign: 'justify'
    },
    badgerBuilder: {
        width: isMobile ? 180 : 411,
        height: isMobile ? 104 : 'initial',
        marginTop: isMobile ? 30 : 122,
        marginBottom: isMobile ? 17.6 : 78
    }
}))

export default function Buidl() {
    const styles = useStyles();

    return (
        <Grid container className={styles.main} alignItems="center" justify="center">
            <Grid className={styles.mainWrapper} container>
                <Grid container direction="row" justify="center" alignItems="flex-end" className={styles.top}>
                    <img draggable={false} alt="Hammer Icon" src="/assets/images/hammer.png" className={styles.hammerIcon} />
                    <Typography className={styles.buildText}>Build with the Badgers</Typography>
                    <img draggable={false} alt="Screw Icon" src="/assets/images/screw.png" className={styles.hammerIcon} />
                </Grid>
                <Typography className={styles.description}>Come join the party! The Badgers are growing in numbers, and there’s plenty of room left for anyone who wants to come and start building products and liquidity strategies with the community. </Typography>
                <Typography className={styles.waysText}>Ways you can contribute:</Typography>
                <Grid container className={styles.item} alignItems="flex-start" direction="row">
                    <Grid item>
                        <img draggable={false} alt="Star Logo" src="/assets/images/star.png" className={styles.star} />
                    </Grid>
                    <Grid item className={styles.itemRight}>
                        <Grid container>
                            <Typography className={styles.itemText}>
                                <span className={styles.itemTitle}>Governance:</span>
                                <Link href="https://forum.badger.finance/">
                                    <span className={styles.itemLink}> Read through our governance forum</span>
                                </Link>
                                <span> vote on current proposals or compose your own!</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={styles.item} alignItems="flex-start" direction="row">
                    <Grid item>
                        <img draggable={false} alt="Star Logo" src="/assets/images/star.png" className={styles.star} />
                    </Grid>
                    <Grid item className={styles.itemRight}>
                        <Grid container>
                            <Typography className={styles.itemText}>
                                <span className={styles.itemTitle}>Development:</span>
                                <span> Build new products, liquidity strategies and integrations with other Defi DAOs.</span>
                            </Typography>
                            <Typography className={styles.itemText}>
                                <Link href="https://forms.gle/bJMAC5M3T2NfSvy3A">
                                    <span className={styles.itemLink} style={{marginLeft: 0}}> Fill out our Badger Interest Form</span>
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={styles.item} alignItems="flex-start" direction="row">
                    <Grid item>
                        <img draggable={false} alt="Star Logo" src="/assets/images/star.png" className={styles.star} />
                    </Grid>
                    <Grid item className={styles.itemRight}>
                        <Grid container>
                            <Typography className={styles.itemText}>
                                <span className={styles.itemTitle}>Join the Discussion:</span>
                                <Link href="https://discord.gg/PaPaeDq">
                                    <span className={styles.itemLink}> Hop in to our Discord</span>
                                </Link>
                                <span className={styles.itemText}> to get involved in the conversations and find out about our awesome community events!</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <img draggable={false} alt="Badger Builder" src="/assets/images/badgerBuilder.png" className={styles.badgerBuilder} />
                </Grid>
            </Grid>
        </Grid>
    )
}