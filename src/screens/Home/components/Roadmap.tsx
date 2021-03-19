import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';

import { roadmapList, cloudList } from '../../../utils/roadmapList';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        paddingTop: 234,
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
        marginBottom: 250,
    },
    leftBush: {
        width: 234,
        position: 'absolute',
        left: 0,
        bottom: 0,
        zIndex: 1,
    },
    mainBottom: {
        width: 846,
        position: 'absolute',
        left: 'calc(50% - 450px)',
        bottom: -1,
        zIndex: 1,
    },
    rightBush: {
        width: 398,
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 1,
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
                <img draggable={false} src="/assets/images/sunStar.png" className={styles.sunStar} />
                <Typography className={styles.roadmapText}>Roadmap</Typography>
                <Fade up duration={3000}>
                    <img draggable={false} src="/assets/images/rocket.png" className={styles.rocket} />
                </Fade>
                <Grid container>
                    <Grid className={styles.left} container direction="column" alignItems="flex-end">
                        <Grid style={{ height: 200 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[1]} width={318} height={480} left />
                        </Fade>
                        <Grid style={{ height: 380 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...roadmapList[3]} width={400} height={200} left />
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
                <img draggable={false} src="/assets/images/bottomGas.png" className={styles.bottomGas} />
                <img draggable={false} src="/assets/images/leftBush.png" className={styles.leftBush} />
                <img draggable={false} src="/assets/images/mainBottom.png" className={styles.mainBottom} />
                <img draggable={false} src="/assets/images/rightBush.png" className={styles.rightBush} />
                {
                    cloudList.map(({img: cloudImg, ...cloud}: CloudListType) => (
                        <Fade duration={2000} left={cloud.left ? true : false} right={cloud.right ? true : false}>
                            <img draggable={false} key={cloudImg} src={`/assets/images/${cloudImg}`} className={styles.cloud} style={{...cloud}} />
                        </Fade>
                    ))
                }
            </Grid>
        </Grid>
    )
}