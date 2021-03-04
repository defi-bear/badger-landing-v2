import React from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

import { roadmapList, cloudList } from '../../../utils/roadmapList';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        marginTop: 167,
        position: 'relative',
	},
	subMain: {
        maxWidth: 1220,
    },
    sunStar: {
        width: 1350,
        position: 'absolute',
        left: 'calc(50% - 675px)',
        top: -130
    },
    roadmapText: {
        fontSize: 30,
        lineHeight: '45px',
        color: '#000000',
        borderBottom: '5px solid #000'
    },
    rocket: {
        width: 78,
        marginTop: 72,
        marginBottom: 68,
    },
    left: {
        width: '50%',
        paddingRight: 42,
        flex: 1,
        borderRight: `8px solid ${theme.palette.secondary.main}`,
    },
    right: {
        width: '50%',
        paddingLeft: 42,
        borderLeft: `8px solid ${theme.palette.secondary.main}`,
        flex: 1,
    },
    roadmapItem: {
        flex: 1,
        height: '100%'
    },
    roadmapItemTitle: {
        fontSize: 18,
        lineHeight: '23px',
        marginBottom: 20,
    },
    roadmapItemText: {
        fontFamily: 'POperator',
        fontSize: 25,
        lineHeight: '30px',
        opacity: 0.7,
        marginTop: 15,
        letterSpacing: '-0.028em'
    },
    bottomGas: {
        width: 342,
        marginBottom: 150,
    },
    mainBottom: {
        width: 1532,
        position: 'absolute',
        left: 'calc(50% - 766px)',
        bottom: 205,
        zIndex: 1,
    },
    stackingPart: {
        marginTop: 90,
        paddingTop: 54,
        paddingBottom: 72,
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        zIndex: 10,
    },
    stackingText: {
        fontFamily: 'POperator',
        fontSize: 30,
        fontWeight: 'bold',
        lineHeight: '23px',
        textAlign: 'center',
        color: '#FFF'
    },
    coinStarImg: {
        width: 42,
        paddingLeft: 5,
    },
    stackingDescription: {
        marginTop: 9,
        fontFamily: 'POperator',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: '23px',
        color: '#FFF',
        opacity: 0.8,
        textAlign: 'center'
    },
    launchApp: {
        marginTop: 25,
        padding: '21px 71px 20px 68px',
        borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		'&>span': {
			fontSize: 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
    },
    cloud: {
        position: 'absolute',
    }
}))

type RoadmapItemProps = {
    title: string,
    texts: Array<string>,
    height: number,
    width?: number,
    left? : boolean,
}

type CloudListType = {
    img: string,
    left?: string,
    right?: string,
    top?: number,
    bottom?: number,
    width: number
}

const RoadmapItem = ({ title, texts, width, height, left }: RoadmapItemProps) => {
    const styles = useStyles();

    return (
        <Grid className={styles.roadmapItem} style={{ width, height }}>
            <Typography className={styles.roadmapItemTitle} style={{ textAlign: left ? 'right' : 'left' }}>{title}</Typography>
            <Grid>
                {
                    texts.map(text => (
                        <Typography key={text} className={styles.roadmapItemText}>{text}</Typography>
                    ))
                }
            </Grid>
        </Grid>
    )
}

export default function Roadmap() {
    const styles = useStyles();

    return (
        <Grid container justify="center" className={styles.main} id="roadmap">
            <Grid className={styles.subMain} container direction="column" alignItems="center">
                <img src="assets/images/sunStar.png" className={styles.sunStar} />
                <Typography className={styles.roadmapText}>Roadmap</Typography>
                <img src="assets/images/rocket.png" className={styles.rocket} />
                <Grid container>
                    <Grid className={styles.left} container direction="column" alignItems="flex-end">
                        <Grid style={{ height: 200 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[1]} width={318} height={480} left />
                        </Fade>
                        <Grid style={{ height: 380 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[3]} width={427} height={200} left />
                        </Fade>
                    </Grid>
                    <Grid className={styles.right}>
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[0]} width={560} height={200} />
                        </Fade>
                        <Grid style={{ height: 480 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[2]} width={443} height={380} />
                        </Fade>
                        <Grid style={{ height: 200 }} />
                    </Grid>
                </Grid>
                <img src="assets/images/bottomGas.png" className={styles.bottomGas} />
                <img src="assets/images/mainBottom.png" className={styles.mainBottom} />
                {
                    cloudList.map(({img: cloudImg, ...cloud}: CloudListType) => (
                        <img key={cloudImg} src={`assets/images/${cloudImg}`} className={styles.cloud} style={{...cloud}} />
                    ))
                }
            </Grid>
            <Grid className={styles.stackingPart} container direction="column" alignItems="center">
                <Grid container justify="center" alignItems="flex-end">
                    <Typography className={styles.stackingText}>Start Stacking</Typography>
                    <img src="assets/images/coinStar.png" className={styles.coinStarImg} />
                </Grid>
                <Typography className={styles.stackingDescription}>Open the Badger App and Digg into our Sett Vaults</Typography>
                <Button className={styles.launchApp} onClick={() => window.open('https://app.badger.finance/', '_self')}>LAUNCH OUR APP</Button>
            </Grid>
        </Grid>
    )
}