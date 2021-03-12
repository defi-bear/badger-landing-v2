import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: 85,
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
        fontSize: 20,
        lineHeight: '23px',
    },
    orange: {
        color: theme.palette.secondary.main,
        paddingBottom: 5,
        borderBottom: `4px solid rgba(242, 162, 43, 0.6)`,
    },
    orangeWrapper: {
        position: 'relative',
    },
    star1: {
        width: 25,
        position: 'absolute',
        top: -30,
        left: -20,
        opacity: 0,
    },
    star2: {
        width: 25,
        position: 'absolute',
        top: -50,
        left: 100,
        opacity: 0,
    },
    star3: {
        width: 25,
        position: 'absolute',
        top: 45,
        left: 70,
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