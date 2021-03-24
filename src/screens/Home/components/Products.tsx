import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

import { list, positionList } from '../../../utils/productList';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        paddingTop: isMobile ? 55 : 234,
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)',
        padding: isMobile ? '0px 35px 35px 35px' : 67,
	},
	subMain: {
        maxWidth: 1120,
        backgroundColor: theme.palette.secondary.main,
        padding: isMobile ? '0px 8px' : '32px 42px 131px 42px',
        position: 'relative'
    },
    products: {
        fontSize: isMobile ? '17px' : '30px',
        lineHeight: '55px',
        color: '#FFFFFF',
        textAlign: 'center',
        borderBottom: '6px solid #FFF',
        paddingBottom: isMobile ? '0px' : '15px',
        width: '100%',
        marginBottom: 3,
    },
    item: {
        paddingTop: isMobile ? 21 : 79,
        height: '100%',
        width: isMobile ? 'initial' : 420,
        position: 'relative',
        paddingBottom: 20
    },
    itemImg: {
        height: isMobile ? 106 : 157
    },
    itemTitle: {
        fontSize: isMobile ? '12.5px' : '18px',   
        lineHeight: '23px',
        color: '#FFFFFF',
        marginTop: 22
    },
    itemBody: {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: isMobile ? '4.5px 7.5px 11px 6.5px' : '14px 20px 8px 20px',
        marginTop: 15,
        width: '100%',
        flex: 1,
        maxWidth: isMobile ? 274 : 'initial',
    },
    star: {
        width: isMobile ? 13.5 : 20,
        marginRight: 3,
    },
    itemText: {
        fontFamily: 'POperator',
        fontSize: isMobile ? 17 : 25,
        lineHeight: isMobile ? '16px' : '23px',
        letterSpacing: '-0.05em',
        textAlign: 'justify',
        color: '#FFFFFF',
        opacity: 0.9,
    },
    itemTextWrapper: {
        marginBottom: 15,
    },
    items: {
        padding: isMobile ? '0px' : '0px 60px',
        flexWrap: 'wrap',
        '&>div:last-child': {
            margin: 'auto'
        }
    },
    learnMore: {
        borderRadius: 10,
		background: theme.palette.primary.main,
		height: isMobile ? 24 : 42,
		marginTop: 15,
        padding: '6px 12px',
        position: 'absolute',
        bottom: 7,
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
		'&>span': {
			fontSize: isMobile ? 13.6 : 20,
			color: '#651A1A',
			fontFamily: 'DMono',
			textTransform: 'none',
		},
    },
	arrowImg: {
		width: 14,
		marginLeft: 10,
    },
    rect: {
        width: isMobile ? 10 : 30,
        height: isMobile ? 10 : 30,
        position: 'absolute',
    },
    fullWidth: {
        width: '100%'
    }
}))

type TextItem = {
    text: string,
    letterspacing: string,
}

type ItemProps = {
    img: string,
    title: string,
    textList: Array<Array<TextItem>>,
    learnMore?: string
}

const Item = ({ img, title, textList, learnMore }: ItemProps) => {
    const styles = useStyles();
    return (
        <Grid container direction="column" className={styles.item} justify="center" alignItems="center">
            <Grid item>
                <img draggable={false} src={img} className={styles.itemImg} />
            </Grid>
            <Grid item>
                <Typography className={styles.itemTitle}>{title}</Typography>
            </Grid>
            <Grid item className={styles.itemBody}>
                {
                    textList.map(texts => (
                        <Grid className={styles.itemTextWrapper}>
                            {
                                texts.map((text, index) => (
                                    <Typography key={text.text} className={styles.itemText} style={{letterSpacing: text.letterspacing}}>
                                        {
                                            index === 0 && (
                                                <img draggable={false} src="/assets/images/star.png" className={styles.star} />
                                            )
                                        }
                                        {text.text}
                                    </Typography>
                                ))
                            }
                        </Grid>
                    ))
                }
            </Grid>
            {
                learnMore && (
                    <Button className={styles.learnMore} onClick={() => window.open(learnMore)}>
                        Learn more
                        <img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
                    </Button>
                )
            }
        </Grid>
    )
}

export default function Products() {
    const styles = useStyles();

    return (
        <Grid container className={styles.main} justify="center" id="products">
            <Fade bottom>
                <Grid container className={styles.subMain} justify="center">
                    <Grid className={styles.fullWidth}>
                        <Fade bottom delay={1500}>
                            <Typography className={styles.products}>Products</Typography>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Grid container className={styles.items} justify={isMobile ? "center" : "space-between"}>
                            {
                                list.map((item, index) => (
                                    <Fade key={item.title} bottom delay={isMobile ? 1500 : (index === 0 || index === 1 ? 1500 : 500)}>
                                        <Item {...item} />
                                    </Fade>
                                ))
                            }
                        </Grid>
                    </Grid>
                    {
                        positionList.map(position => (
                            <img draggable={false} key={position.index} alt="Rectangle" src="/assets/images/rect.png" className={styles.rect} style={{...position}} />
                        ))
                    }
                </Grid>
            </Fade>
        </Grid>
    )
}
