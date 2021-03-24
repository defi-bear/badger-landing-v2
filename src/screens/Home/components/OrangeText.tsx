import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: `${isMobile ? '0px 35px 38px 35px' : '85px' }`,
        '&:hover': {
            '& img': {
                animation: `$fadeIn 3s infinite`
            } 
        },
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)'
    },
    '@keyframes fadeIn': {
        '0%': {
            opacity: 0
        },
        '50%': {
            opacity: 1
        },
        '100%': {
            opacity:0
        }
    },
    text: {
        fontFamily: 'P2P',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: `${isMobile ? 10.0103 : 20}px`,
        lineHeight: isMobile ? '12px' : '23px',
    },
    orange: {
        color: theme.palette.secondary.main,
        paddingBottom: 5,
        borderBottom: `4px solid rgba(242, 162, 43, 0.6)`,
    },
    orangeWrapper: {
        position: 'relative',
        marginTop: isMobile ? 20 : 0
    },
    star1: {
        width: isMobile ? 12.5 : 25,
        position: 'absolute',
        top: isMobile ? -10 : -30,
        left: isMobile ? -10 : -20,
        opacity: 0,
    },
    star2: {
        width: isMobile ? 12.5 : 25,
        position: 'absolute',
        top: isMobile ? -20 : -50,
        left: isMobile ? 55 : 100,
        opacity: 0,
    },
    star3: {
        width: isMobile ? 12.5 : 25,
        position: 'absolute',
        top: isMobile ? 35 : 45,
        left: isMobile ? 30 : 70,
        opacity: 0,
    }
}))

export default function OrangeText() {
    const styles = useStyles();

    return (
        <Grid container justify="center" className={styles.main}>
            <Typography className={styles.text}>
                <Grid className={styles.orangeWrapper}>
                    <span className={styles.orange}>Orange</span> is the new blue-chip.
                    <img draggable={false} alt="Star" src="/assets/images/star.png" className={styles.star1} />
                    <img draggable={false} alt="Star" src="/assets/images/star.png" className={styles.star2} />
                    <img draggable={false} alt="Star" src="/assets/images/star.png" className={styles.star3} />
                </Grid>
            </Typography>
        </Grid>
    )
}