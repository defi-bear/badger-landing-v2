import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(() => ({
    main: {
		width: '100%',
		padding: isMobile ? '50px 35px 0px 36px' : '107px 35px 0px 36px',
        overflow: 'hidden'
    },
    subMain: {
        maxWidth: 1120,
    },
    title: {
        fontFamily: 'P2P',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: `${isMobile ? 13 : 18}px`,
        lineHeight: `${isMobile ? 17 : 23}px`,
        marginBottom: 5,
        marginTop: `${isMobile ? 30 : 0}px`,
        textAlign: isMobile ? 'center' : 'left'
    },
    textWrapper: {
        marginTop: isMobile ? 15 : 25,
        display: 'flex',
        flexDirection: 'row'
    },
    indentIcon: {
        width: isMobile ? 10.8 : 15,
        height: isMobile ? 10.8 : 15,
        marginTop: 4,
        marginRight: 6
    },
    subText: {
        fontFamily: 'POperator',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: isMobile ? '18px' : '25px',
        lineHeight: isMobile ? '16.6px' : '23px',
        opacity: 0.7,
        marginLeft: 4,
        textAlign: 'justify',
    },
    bitcoin: {
        width: isMobile ? 187.5 : 311,
        height: isMobile ? 130.03 : 216
    },
    kongContainer: {
        marginTop: isMobile ? 50 : 120
    },
    kongIcon: {
        width: isMobile ? 197.6 : 328,
        height: isMobile ? 147.5 : 245,
    },
    ecosystemContainer: {
        marginTop: isMobile ? 50 : 112
    },
    treasuryContainer: {
        position: 'relative'
    },
    treasuryIcon: {
        width: isMobile ? 240 : 400,
        height: isMobile ? 128 : 213,
        position: isMobile ? 'initial' : 'absolute',
        right: -52,
        marginTop: isMobile ? 0 : -30,
    }
}))

type SubTextProps = {
    children: string
    width?: string | number,
    letterspacing?: any,
}

const SubText = ({ children, width, letterspacing }: SubTextProps) => {
    const styles = useStyles();
    const spacing = letterspacing || (isMobile ? '-0.05em' : 'initial');
    return (
        <Grid className={styles.textWrapper} style={{ width: width || 'initial' }}>
            <Typography className={styles.subText} style={{ letterSpacing: spacing }}>
                <img draggable={false} alt="Indent Icon" src="/assets/images/marioCoin.png" className={styles.indentIcon} />
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
                <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
                    <Grid item xs={isMobile ? 12 : 8}>
                        <Fade bottom delay={500}>
                            <>
                                <Typography className={styles.title}>The Power of Bitcoin</Typography>
                                <SubText width={isMobile ? '100%' : 580}>
                                    The #1 digital store of value on the planet, with the most distributed and permissionless network.
                                </SubText>
                                <SubText letterspacing="0em">
                                    Unmatched in hashpower and security.
                                </SubText>
                                <SubText>
                                    The leading digital asset, with billions in $ value represented in the Ethereum network alone.
                                </SubText>
                            </>
                        </Fade>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 4}>
                        <Fade right>
                            <Grid container justify={isMobile ? "center" : "flex-end"}>
                                <img draggable={false} alt="Bitcoin Icons" src="/assets/images/bitcoinGroup.png" className={styles.bitcoin} />
                            </Grid>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container className={styles.kongContainer} direction={isMobile ? 'column' : 'row'}>
                    <Grid item xs={isMobile ? 12 : 4}>
                        <Fade left>
                            <Grid container justify={isMobile ? "center" : "flex-start"}>
                                <img draggable={false} alt="Kong Icon" src="/assets/images/kongImg.png" className={styles.kongIcon} />
                            </Grid>
                        </Fade>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 8}>
                        <Fade bottom delay={500}>
                            <>
                                <Typography className={styles.title} align="right">The Potential of DeFi</Typography>
                                <SubText letterspacing={isMobile ? '-0.05em' : '-0.032em'}>
                                    The fastest-growing sub-industry in blockchain, with over $25B Total Value Locked in DeFi applications.
                                </SubText>
                                <SubText letterspacing={isMobile ? '-0.05em' : 'initial'}>
                                    For the first time, retail traders are able to utilize advanced financial instruments permissionlessly.
                                </SubText>
                                <SubText letterspacing={isMobile ? '-0.01em' : '0.005em'}>
                                    It’s a way to build alternatives to closed and centralized systems of Wall Street and the world’s most powerful banks.
                                </SubText>
                            </>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container className={styles.ecosystemContainer} direction={isMobile ? 'column-reverse' : 'row'}>
                    <Grid item xs={isMobile ? 12 : 8}>
                        <Fade bottom delay={500}>
                            <>
                                <Typography className={styles.title}>Ecosystem-Forward</Typography>
                                <SubText>
                                    The BadgerDAO believes in the initiatives of other Web3 projects and aims to support them with exposure and funds.
                                </SubText>
                                <SubText letterspacing={isMobile ? '-0.04em' : '0.003em'}>
                                    Gitcoin is a grants program for Web3 projects that are building to further advance the blockchain ecosystem. 2% of the DAO’s treasury is devoted to philanthropic efforts supporting the growing communities.
                                </SubText>
                            </>
                        </Fade>
                    </Grid>
                    <Grid item xs={isMobile ? 12 : 4} className={styles.treasuryContainer}>
                        <Fade right>
                            <Grid container justify={isMobile ? "center" : "flex-end"}>
                                <img draggable={false} alt="Treasury Icon" src="/assets/images/treasury.png" className={styles.treasuryIcon} />
                            </Grid>
                        </Fade>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}