import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';

import { list, positionList } from '../../../utils/productList';

const useStyles = makeStyles((theme) => ({
    main: {
        width: '100%',
        marginTop: 120,
        paddingBottom: 67,
        borderBottom: '3px solid rgba(0, 0, 0, 0.05)'
	},
	subMain: {
        maxWidth: 1120,
        backgroundColor: theme.palette.secondary.main,
        padding: '32px 42px 131px 42px',
        position: 'relative'
    },
    products: {
        fontSize: '30px',
        lineHeight: '55px',
        color: '#FFFFFF',
        textAlign: 'center',
        borderBottom: '6px solid #FFF',
        paddingBottom: '15px',
        width: '100%',
        marginBottom: 3,
    },
    item: {
        paddingTop: 79,
        height: '100%',
        width: 420,
        position: 'relative',
    },
    itemImg: {
        height: 157
    },
    itemTitle: {
        fontSize: '18px',   
        lineHeight: '23px',
        color: '#FFFFFF',
        marginTop: 22
    },
    itemBody: {
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 10,
        padding: '14px 20px 8px 20px',
        marginTop: 15,
        width: '100%',
        flex: 1,
    },
    star: {
        width: 20,
        marginRight: 3,
    },
    itemText: {
        fontFamily: 'POperator',
        fontSize: 25,
        lineHeight: '23px',
        letterSpacing: '-0.05em',
        textAlign: 'justify',
        color: '#FFFFFF',
        opacity: 0.9,
    },
    itemTextWrapper: {
        marginBottom: 15,
    },
    items: {
        padding: '0px 60px',
        flexWrap: 'wrap'
    },
    learnMore: {
        borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 15,
        padding: '6px 12px',
        position: 'absolute',
        bottom: -20,
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
    rect: {
        width: 30,
        height: 30,
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
                        <Fade bottom delay={1000}>
                            <Typography className={styles.products}>Products</Typography>
                        </Fade>
                    </Grid>
                    <Grid item>
                        <Grid container className={styles.items} justify="space-between">
                            {
                                list.map(item => (
                                    <Fade key={item.title} bottom delay={1000}>
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
