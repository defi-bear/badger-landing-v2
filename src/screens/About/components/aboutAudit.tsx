import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: 110
    },
    leftPanel: {
        backgroundColor: theme.palette.secondary.main,
        padding: '72px 0px 28px 123px',
    },
    auditText: {
        color: 'white',
        fontSize: 30,
        lineHeight: '40px',
        borderBottom: '6px solid white',
        marginLeft: 'calc( 50% - 90px )',
        marginBottom: 87,
    },
    auditImg: {
        width: 120,
        marginRight: 52,
    },
    auditWrapper: {
        marginBottom: 116,
    },
    auditSubText: {
        fontSize: 18,
        lineHeight: '23px',
        color: '#FFF'
    },
    whiteLine: {
        width: 138,
        height: 5,
        background: '#FFF',
        marginLeft: 11
    },
    auditDescription: {
        fontFamily: 'POperator',
        fontSize: 25,
        lineHeight: '23px',
        color: '#FFF',
        opacity: 0.9,
        marginTop: 12,
    },
    readAudit: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 21,
		padding: '6px 12px',
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
    rightPanel: {
        position: 'relative',
    },
    securityPerson: {
        width: 535,
        height: 479,
        position: 'absolute',
        top: 110,
        left: -114,
    },
    yellowBorder: {
        width: 'calc( 100% + 114px )',
        height: 57,
        background: '#FFDD29',
        position: 'absolute',
        top: 579,
        left: -114,
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
        <Grid container className={styles.main}>
            <Grid className={styles.leftPanel} item xs={8}>
                <Typography className={styles.auditText}>Audits</Typography>
                <Grid className={styles.auditWrapper} container alignItems="flex-end">
                    <Grid item>
                        <img alt="Audit Logo" src="/assets/images/bigAudit.png" className={styles.auditImg} />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container alignItems="center">
                            <Typography className={styles.auditSubText}>Zokyo audit</Typography>
                            <Grid className={styles.whiteLine} />
                        </Grid>
                        <Typography className={styles.auditDescription}>Zokyo audits smart contracts, protocols, crowd sale token contracts, and custom smart contracts across every major protocol and programming language.</Typography>
                        <Button className={styles.readAudit} onClick={onZokyoAudit}>
                            read the audit
                            <img alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                        </Button>
                    </Grid>
                </Grid>
                <Grid className={styles.auditWrapper} container alignItems="flex-end">
                    <Grid item>
                        <img alt="Audit Logo" src="/assets/images/bigAudit.png" className={styles.auditImg} />
                    </Grid>
                    <Grid item xs={7}>
                        <Grid container alignItems="center">
                            <Typography className={styles.auditSubText}>Haechi audit</Typography>
                            <Grid className={styles.whiteLine} />
                        </Grid>
                        <Typography className={styles.auditDescription}>Haechi is a leading smart contract security audit and development firm. They are incubated by the Samsung Electronics and awarded Ethereum Foundation Grant.</Typography>
                        <Button className={styles.readAudit} onClick={onHaechiAudit}>
                            read the audit
                            <img alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={styles.rightPanel} item xs={4}>
                <img alt="Security Person" src="/assets/images/securityPeople.png" className={styles.securityPerson} />
                <Grid className={styles.yellowBorder} />
            </Grid>
        </Grid>
    )
}