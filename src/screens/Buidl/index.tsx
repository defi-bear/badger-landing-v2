import React from 'react';
import { Grid, Typography, makeStyles, Link } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    main: {

    },
    mainWrapper: {
        maxWidth: 1130,
    },
    hammerIcon: {
        width: 79.5
    },
    buildText: {
        fontSize: 30,
        lineHeight: '55px',
        color: 'black',
    },
    top: {
        marginTop: 76
    },
    description: {
        marginTop: 58,
        fontFamily: 'POperator',
        fontSize: 28,
        lineHeight: '35px',
        opacity: 0.7,
        textIndent: 30
    },
    waysText: {
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: 28,
        lineHeight: '35px',
        opacity: 0.7,
        marginTop: 57
    },
    item: {
        marginTop: 50
    },
    star: {
        width: 25,
        height: 20,
        marginLeft: 29,
        marginTop: 11
    },
    itemRight: {
        width: 1056,
        marginLeft: 20,
    },
    itemTitle: {
        fontFamily: 'POperator',
        fontSize: 28,
        opacity: 0.7,
        fontWeight: 'bold'
    },
    itemLink: {
        marginLeft: 10,
        fontFamily: 'POperator',
        fontSize: 28,
        opacity: 0.7,
        color: '#d8a24d'
    },
    itemText: {
        marginLeft: 8,
        fontFamily: 'POperator',
        fontSize: 28,
        opacity: 0.7,
    },
    badgerBuilder: {
        width: 411,
        marginTop: 122,
        marginBottom: 78
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
                            <Typography className={styles.itemTitle}>Governance:</Typography>
                            <Link href="https://forum.badger.finance/">
                                <Typography className={styles.itemLink}>Read through our governance forum</Typography>
                            </Link>
                            <Typography className={styles.itemText}>vote on current proposals or compose your own!</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={styles.item} alignItems="flex-start" direction="row">
                    <Grid item>
                        <img draggable={false} alt="Star Logo" src="/assets/images/star.png" className={styles.star} />
                    </Grid>
                    <Grid item className={styles.itemRight}>
                        <Grid container>
                            <Typography className={styles.itemTitle}>Development:</Typography>
                            <Typography className={styles.itemText}>Build new products, liquidity strategies and integrations with other Defi DAOs.</Typography>
                            <Link href="https://forms.gle/bJMAC5M3T2NfSvy3A">
                                <Typography className={styles.itemLink} style={{marginLeft: 0}}>Fill out our Badger Interest Form</Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container className={styles.item} alignItems="flex-start" direction="row">
                    <Grid item>
                        <img draggable={false} alt="Star Logo" src="/assets/images/star.png" className={styles.star} />
                    </Grid>
                    <Grid item className={styles.itemRight}>
                        <Grid container>
                            <Typography>
                                <span className={styles.itemTitle}>Join the Discussion:</span>
                                <Link href="https://discord.gg/PaPaeDq">
                                    <span className={styles.itemLink}>Hop in to our Discord</span>
                                </Link>
                                <span className={styles.itemText}>to get involved in the conversations and find out about our awesome community events!</span>
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