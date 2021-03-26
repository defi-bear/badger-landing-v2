import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
// @ts-ignore
import Bounce from 'react-reveal/Bounce';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: isMobile ? 30 : 110,
    },
    leftPanel: {
        backgroundColor: theme.palette.secondary.main,
        padding: isMobile ? '3px 0px 0px 24px' : '72px 0px 28px 123px',
    },
    auditText: {
        color: 'white',
        fontSize: isMobile ? 13 : 30,
        lineHeight: isMobile ? '20px' : '40px',
        borderBottom: '6px solid white',
        marginLeft: isMobile ? '170px' : 'calc( 50% - 90px )',
        marginBottom: isMobile ? 10 : 87,
        marginTop: isMobile ? 20 : 0,
    },
    auditImg: {
        width: isMobile ? 43 : 120,
        marginRight: isMobile ? 21 : 52,
        marginTop: isMobile ? 23 : 0
    },
    auditWrapper: {
        marginBottom: isMobile ? 36.5 : 116,
    },
    auditSubText: {
        fontSize: isMobile ? 10 : 18,
        lineHeight: isMobile ? '11px' : '23px',
        color: '#FFF',
        marginBottom: isMobile ? 8 : 0
    },
    whiteLine: {
        width: 138,
        height: 5,
        background: '#FFF',
        marginLeft: 11
    },
    auditDescription: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 25,
        lineHeight: isMobile ? '15px' : '23px',
        color: '#FFF',
        opacity: 0.9,
        marginTop: isMobile ? 0 : 12,
        width: isMobile ? 200 : 402,
        textAlign: 'justify'
    },
    readAudit: {
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
    rightPanel: {
        position: 'relative',
    },
    securityPerson: {
        width: isMobile ? 117 : 328,
        height: isMobile ? 125 : 352,
        position: 'absolute',
        top: isMobile ? 420 : 240,
        left: isMobile ? -150 : -114,
    },
    bubbleWrapper: {
        position: 'absolute',
        left: isMobile ? -65 : 150,
        top: isMobile ? 370 : 120,
        width: isMobile ? 95 : 267,
    },
    securityBubble: {
        width: '100%'
    },
    securityText: {
        fontFamily: 'P2P',
        fontSize: isMobile ? 8.5 : 25,
        lineHeight: isMobile ? '8px' : '35px',
        position: 'absolute',
        top: isMobile ? 33 : 85,
        left: isMobile ? 14 : 35,
    },
    yellowBorder: {
        width: isMobile ? 220 : 'calc( 100% + 114px )',
        height: isMobile ? 20 : 57,
        background: theme.palette.primary.main,
        position: 'absolute',
        top: isMobile ? 532 : 579,
        left: isMobile ? -158 : -114,
    },
}))

export default function AboutAudit() {
    const styles = useStyles();

    const onZokyoAudit = () => {
        window.open('https://assets.website-files.com/5f99eb7870add47583eb24af/5fd9c6549c803429a0c80748_Badger%20SC%20Audit.pdf', '_target');
    }

    const onHaechiAudit = () => {
        window.open('https://badger.finance/wp-content/uploads/2021/01/HAECHI-AUDIT-BadgerDAO-Smart-Contract-Audit-Report-1.pdf', '_target');
    }

    return (
        <Fade bottom>
            <Grid container className={styles.main}>
                <Grid className={styles.leftPanel} item xs={isMobile ? 10 : 8}>
                    <Fade right delay={1000}>
                        <Typography className={styles.auditText}>Audits</Typography>
                    </Fade>
                    <Grid className={styles.auditWrapper} container alignItems={isMobile ? "flex-start" : "flex-end"}>
                        <Grid item>
                            <img draggable={false} alt="Audit Logo" src="/assets/images/bigAudit.png" className={styles.auditImg} />
                        </Grid>
                        <Grid item xs={isMobile ? 8 : 7}>
                            <Grid container alignItems="center">
                                <Typography className={styles.auditSubText}>Zokyo audit</Typography>
                                { !isMobile && <Grid className={styles.whiteLine} /> }
                            </Grid>
                            {
                                isMobile ? (
                                    <>
                                        <Typography className={styles.auditDescription}>Zokyo audits smart contracts,</Typography>
                                        <Typography className={styles.auditDescription} style={{letterSpacing: '0.03em'}}>protocols, crowd sale token</Typography>
                                        <Typography className={styles.auditDescription} style={{letterSpacing: '0.02em'}}>contracts, and custom smart</Typography>
                                        <Typography className={styles.auditDescription}>contracts across every major</Typography>
                                        <Typography className={styles.auditDescription} style={{letterSpacing: '0.07em'}}>protocol and programming</Typography>
                                        <Typography className={styles.auditDescription}>language.</Typography>
                                    </>
                                ) : (
                                    <Typography className={styles.auditDescription}>Zokyo audits smart contracts, protocols, crowd sale token contracts, and custom smart contracts across every major protocol and programming language.</Typography>
                                )
                            }
                            <Button className={styles.readAudit} onClick={onZokyoAudit}>
                                read the audit
                                <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid className={styles.auditWrapper} container alignItems={isMobile ? "flex-start" : "flex-end"}>
                        <Grid item>
                            <img draggable={false} alt="Audit Logo" src="/assets/images/bigAudit.png" className={styles.auditImg} />
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container alignItems="center">
                                <Typography className={styles.auditSubText}>Haechi audit</Typography>
                                { !isMobile && <Grid className={styles.whiteLine} /> }
                            </Grid>
                            {
                                isMobile ? (
                                    <Grid>
                                        <Typography className={styles.auditDescription} style={{ letterSpacing: '-0.05em' }}>Haechi is a leading smart contract</Typography>
                                        <Typography className={styles.auditDescription} style={{ letterSpacing: '-0.015em' }}>security audit and development</Typography>
                                        <Typography className={styles.auditDescription} style={{ letterSpacing: '0.037em' }}>firm. They are incubated by</Typography>
                                        <Typography className={styles.auditDescription} style={{ letterSpacing: '0.025em' }}>the Samsung Electronics and</Typography>
                                        <Typography className={styles.auditDescription} style={{ letterSpacing: '0.006em' }}>awarded Ethereum Foundation</Typography>
                                        <Typography className={styles.auditDescription}>Grant.</Typography>
                                    </Grid>
                                ) : (
                                    <Typography className={styles.auditDescription} style={{ letterSpacing: '-0.04em' }}>Haechi is a leading smart contract security audit and development firm. They are incubated by the Samsung Electronics and awarded Ethereum Foundation Grant.</Typography>
                                )
                            }
                            <Button className={styles.readAudit} onClick={onHaechiAudit}>
                                read the audit
                                <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid className={styles.rightPanel} item xs={isMobile ? 2 : 4}>
                    <img draggable={false} alt="Security Person" src="/assets/images/securityPeople.png" className={styles.securityPerson} />
                    <Bounce right cascade delay={2000}>
                        <Grid className={styles.bubbleWrapper}>
                            <img draggable={false} alt="Security Bubble" src="/assets/images/securityBubble.png" className={styles.securityBubble} />
                            <Typography className={styles.securityText}>Security matters</Typography>
                        </Grid>
                    </Bounce>
                    <Grid className={styles.yellowBorder} />
                </Grid>
            </Grid>
        </Fade>
    )
}