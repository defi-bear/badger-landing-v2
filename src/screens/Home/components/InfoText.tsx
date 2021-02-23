import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    topText: {
        fontFamily: 'POperator',
        fontSize: 25,
        color: theme.palette.secondary.contrastText,
        fontWeight: 'bold'
    },
    bottomText: {
        fontFamily: 'POperator',
        fontSize: 23,
        color: theme.palette.secondary.contrastText,
        opacity: 0.8
    }
}))

type InfoTextProps = {
    topText: string,
    bottomText: string
}

export default function InfoText({ topText, bottomText}: InfoTextProps) {
    const styles = useStyles();
    return (
        <Grid container direction="column">
            <Typography className={styles.topText}>{topText}</Typography>
            <Typography className={styles.bottomText}>{bottomText}</Typography>
        </Grid>
    )
}