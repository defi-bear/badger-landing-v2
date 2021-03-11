import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
// @ts-ignore
import Positional, { Coord } from 'positional-react-animations';

const useStyles = makeStyles(() => ({
    main: {
        position: 'relative',
        maxWidth: 530
    },
	mainBadger: {
		width: '100%'
    },
    starContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
    },
    star1: {
        width: 38,
    },
    star2: {
        width: 25,
    },
    star3: {
        width: 25,
        position: 'absolute',
    },
    star4: {
        width: 30,
    }
}))

export default function MainBadgerImage() {
    const styles = useStyles();
    return (
        <Grid className={styles.main}>
            <img alt="Main Badger Image" src="/assets/images/mBadger.png" className={styles.mainBadger} />
            <Grid className={styles.starContainer}>
                <Positional height="100%" cursorEvent>
                    <Coord x={30} y={15}>
                        <img alt="Star" src="/assets/images/star.png" className={styles.star1} />
                    </Coord>
                    <Coord x={20} y={25}>
                        <img alt="Star" src="/assets/images/star.png" className={styles.star2} />
                    </Coord>
                    <Coord x={90} y={10}>
                        <img alt="Star" src="/assets/images/star.png" className={styles.star3} />
                    </Coord>
                    <Coord x={90} y={85} velocity={200}>
                        <img alt="Star" src="/assets/images/star.png" className={styles.star4} />
                    </Coord>
                </Positional>
            </Grid>
        </Grid>
    )
}