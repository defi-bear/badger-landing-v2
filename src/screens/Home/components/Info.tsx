import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles(() => ({
    main: {
		width: '100%',
		padding: '107px 140px 114px 155px',
    },
    subMain: {
        maxWidth: 1120
    },
    title: {
        fontFamily: 'P2P',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 18,
        lineHeight: '23px',
        marginBottom: 5,
    },
    textWrapper: {
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row'
    },
    indentIcon: {
        width: 15,
        height: 15,
        marginTop: 4,
    },
    subText: {
        fontFamily: 'POperator',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '25px',
        lineHeight: '23px',
        letterSpacing: '-0.001em',
        opacity: 0.7,
        marginLeft: 4,
    },
    bitcoin: {
        width: 311,
        height: 216
    },
    kongContainer: {
        marginTop: 120
    },
    kongIcon: {
        width: 328,
        height: 245,
    },
    ecosystemContainer: {
        marginTop: 112
    },
    treasuryContainer: {
        position: 'relative'
    },
    treasuryIcon: {
        width: 400,
        height: 213,
        position: 'absolute',
        right: -52
    }
}))

type SubTextProps = {
    children: string
}

const SubText = ({children}: SubTextProps) => {
    const styles = useStyles();
    return (
        <Grid className={styles.textWrapper}>
            <img draggable={false} alt="Indent Icon" src="/assets/images/marioCoin.png" className={styles.indentIcon} />
            <Typography className={styles.subText}>
                {children}
            </Typography>
        </Grid>
    )
}

export default function Info() {
    const styles = useStyles();

    return (
        <Grid container className={styles.main} justify="center">
            <Grid className={styles.subMain}>
                <Grid container>
                    <Grid item xs={8}>
                        <Fade bottom delay={500}>
                            <>
                                <Typography className={styles.title}>The Power of Bitcoin</Typography>
                                <SubText>
                                    The #1 digital store of value on the planet, with the most distributed and permissionless network.
                                </SubText>
                                <SubText>
                                    Unmatched in hashpower and security.
                                </SubText>
                                <SubText>
                                    The leading digital asset, with billions in $ value represented in the Ethereum network alone.
                                </SubText>
                            </>
                        </Fade>
                    </Grid>
                    <Grid item xs={4}>
                        <Fade right>
                            <Grid container justify="flex-end">
                                <img draggable={false} alt="Bitcoin Icons" src="/assets/images/bitcoinGroup.png" className={styles.bitcoin} />
                            </Grid>
                        </Fade>
                    </Grid>
                </Grid>
                <Fade right delay={500}>
                    <Grid container className={styles.kongContainer}>
                        <Grid item xs={4}>
                            <Fade left delay={1000}>
                                <Grid container justify="flex-start">
                                    <img draggable={false} alt="Kong Icon" src="/assets/images/kongImg.png" className={styles.kongIcon} />
                                </Grid>
                            </Fade>
                        </Grid>
                        <Grid item xs={8}>
                            <Fade bottom delay={1500}>
                                <>
                                    <Typography className={styles.title} align="right">The Potential of DeFi</Typography>
                                    <SubText>
                                        The fastest-growing sub-industry in blockchain, with over $25B Total Value Locked in DeFi applications.
                                    </SubText>
                                    <SubText>
                                        For the first time, retail traders are able to utilize advanced financial instruments permissionlessly and without KYC.
                                    </SubText>
                                    <SubText>
                                        It’s a way to build alternatives to closed and centralized systems of Wall Street and the world’s most powerful banks.
                                    </SubText>
                                </>
                            </Fade>
                        </Grid>
                    </Grid>
                </Fade>
                <Fade left delay={500}>
                    <Grid container className={styles.ecosystemContainer}>
                        <Grid item xs={8}>
                            <Fade bottom delay={2500}>
                                <>
                                    <Typography className={styles.title}>Ecosystem-Forward</Typography>
                                    <SubText>
                                        The Badger DAO believes in the initiatives of other Web3 projects and aims to support them with exposure and funds.
                                    </SubText>
                                    <SubText>
                                        Gitcoin is a grants program for Web3 projects that are building cool stuff for the blockchain ecosystem. 2% of the DAO’s treasury is devoted to philanthropic efforts to these small communities.
                                    </SubText>
                                </>
                            </Fade>
                        </Grid>
                        <Grid item xs={4} className={styles.treasuryContainer}>
                            <Fade right delay={2000}>
                                <Grid container justify="flex-end">
                                    <img draggable={false} alt="Treasury Icon" src="/assets/images/treasury.png" className={styles.treasuryIcon} />
                                </Grid>
                            </Fade>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </Grid>
    )
}