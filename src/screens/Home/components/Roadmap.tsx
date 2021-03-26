import React from 'react';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
import { isMobile as ismobile } from 'react-device-detect';

import { roadmapList, mobileRoadmapList, cloudList } from '../../../utils/roadmapList';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        paddingTop: ismobile ? 98 : 234,
        position: 'relative',
        overflow: 'hidden'
	},
	subMain: {
        maxWidth: 1220,
    },
    sunStar: {
        width: ismobile ? 335 : 1350,
        position: 'absolute',
        left: ismobile ? 'calc(50% - 167.5px)' : 'calc(50% - 675px)',
        top: ismobile ? 15 : 50
    },
    roadmapText: {
        fontSize: ismobile ? 17 : 30,
        lineHeight: ismobile ? '35px' : '45px',
        color: '#000000',
        borderBottom: '5px solid #000'
    },
    rocket: {
        width: ismobile ? 41 : 78,
        marginTop: ismobile ? 50 : 72,
        marginBottom: ismobile ? 5 : 68,
    },
    left: {
        width: '50%',
        paddingRight: ismobile ? 15 : 42,
        flex: 1,
        borderRight: `${ismobile ? 4 : 8}px solid ${theme.palette.secondary.main}`,
    },
    right: {
        width: '50%',
        paddingLeft: ismobile ? 15 : 42,
        borderLeft: `${ismobile ? 4 : 8}px solid ${theme.palette.secondary.main}`,
        flex: 1,
    },
    roadmapItem: {
        flex: 1,
        height: '100%'
    },
    roadmapItemTitle: {
        fontSize: ismobile ? 9.5 : 18,
        lineHeight: ismobile ? '12px' : '23px',
        marginBottom: ismobile ? 0 : 20,
    },
    roadmapItemText: {
        fontFamily: 'POperator',
        fontSize: ismobile ? 16 : 25,
        lineHeight: ismobile ? '16px' : '30px',
        opacity: 0.7,
        marginTop: ismobile ? 0 : 15,
        letterSpacing: ismobile ? '-0.05em' : '-0.028em',
    },
    mobileTexts: {
        marginTop: 10
    },
    bottomGas: {
        width: ismobile ? 180 : 342,
        marginBottom: ismobile ? 50 : 250,
    },
    leftBush: {
        width: ismobile ? 69 : 234,
        position: 'absolute',
        left: ismobile ? -20 : 0,
        bottom: 0,
        zIndex: 1,
    },
    mainBottom: {
        width: ismobile ? 250 : 846,
        position: 'absolute',
        left: ismobile ? 'calc(50% - 138px)' : 'calc(50% - 450px)',
        bottom: ismobile ? 0 : -1,
        zIndex: 1,
    },
    rightBush: {
        width: ismobile ? 67 : 398,
        position: 'absolute',
        right: 0,
        bottom: 0,
        zIndex: 1,
    },
    cloud: {
        position: 'absolute',
    }
}))

type RoadmapItemTextType = {
    text: string,
    letterspacing: string,
}

type RoadmapItemProps = {
    title: string,
    texts: Array<string | Array<RoadmapItemTextType>>,
    height: number,
    width?: number,
    left? : boolean,
    top? : number,
}

type CloudListType = {
    img: string,
    left?: string,
    right?: string,
    top?: number,
    bottom?: number,
    width: number
}

const RoadmapItem = ({ title, texts, width, height, left, top }: RoadmapItemProps) => {
    const styles = useStyles();

    return (
        <Grid className={styles.roadmapItem} style={{ width, height, marginTop: top }}>
            <Typography className={styles.roadmapItemTitle} style={{ textAlign: left ? 'right' : 'left' }}>{title}</Typography>
            <Grid>
                {
                    texts.map((text: any) => {
                        if (!ismobile) {
                            return (
                                <Typography key={text} className={styles.roadmapItemText}>{text}</Typography>
                            )
                        } else {
                            return (
                                <Grid className={styles.mobileTexts}>
                                    {
                                        text.map((item: RoadmapItemTextType) => (
                                            <Typography key={item.text} className={styles.roadmapItemText} style={{letterSpacing: item.letterspacing}}>{item.text}</Typography>
                                        ))
                                    }
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </Grid>
    )
}

export default function Roadmap() {
    const styles = useStyles();
    const items = ismobile ? mobileRoadmapList : roadmapList;

    return (
        <Grid container justify="center" className={styles.main} id="roadmap">
            <Grid className={styles.subMain} container direction="column" alignItems="center">
                <img draggable={false} src={`/assets/images/sunStar${ismobile ? '1' : ''}.png`} className={styles.sunStar} />
                <Typography className={styles.roadmapText}>Roadmap</Typography>
                <Fade up duration={3000}>
                    <img draggable={false} src="/assets/images/rocket.png" className={styles.rocket} />
                </Fade>
                <Grid container>
                    <Grid className={styles.left} container direction="column" alignItems="flex-end">
                        <Grid style={{ height: 200 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...items[1]} width={ismobile ? 148 : 318} height={480} left />
                        </Fade>
                        <Grid style={{ height: ismobile ? 150 : 380 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...items[3]} width={ismobile ? 145 : 400} height={ismobile ? 150 : 200} left />
                        </Fade>
                    </Grid>
                    <Grid className={styles.right}>
                        <Fade duration={2000}>
                            <RoadmapItem {...items[0]} width={ismobile ? 144 : 560} height={200} top={36} />
                        </Fade>
                        <Grid style={{ height: ismobile ? 300 : 480 }} />
                        <Fade duration={2000}>
                            <RoadmapItem {...items[2]} width={ismobile ? 144 : 443} height={380} />
                        </Fade>
                        <Grid style={{ height: ismobile ? 0 : 200 }} />
                    </Grid>
                </Grid>
                <img draggable={false} src="/assets/images/bottomGas.png" className={styles.bottomGas} />
                <img draggable={false} src="/assets/images/leftBush.png" className={styles.leftBush} />
                <img draggable={false} src="/assets/images/mainBottom.png" className={styles.mainBottom} />
                <img draggable={false} src={`/assets/images/rightBush${ismobile ? 1 : ''}.png`} className={styles.rightBush} />
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