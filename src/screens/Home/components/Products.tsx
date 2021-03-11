import React from 'react';

import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
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
        marginTop: 79,
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
        letterSpacing: '-0.038em',
        color: '#FFFFFF',
        opacity: 0.9,
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
    }
}))

type ItemProps = {
    img: string,
    title: string,
    textList: Array<string>,
    learnMore?: string
}

const Item = ({ img, title, textList, learnMore }: ItemProps) => {
    const styles = useStyles();

    return (
        <Grid container direction="column" className={styles.item} justify="center" alignItems="center">
            <Grid item>
                <img src={img} className={styles.itemImg} />
            </Grid>
            <Grid item>
                <Typography className={styles.itemTitle}>{title}</Typography>
            </Grid>
            <Grid item className={styles.itemBody}>
                {
                    textList.map(text => (
                        <Typography key={text} className={styles.itemText}><img src="/assets/images/star.png" className={styles.star} />{text}</Typography>
                    ))
                }
            </Grid>
            {
                learnMore && (
                    <Button className={styles.learnMore} onClick={() => window.open(learnMore)}>
                        Learn more
                        <img alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
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
            <Grid container className={styles.subMain} justify="center">
                <Typography className={styles.products}>Products</Typography>
                <Grid item>
                    <Grid container className={styles.items} justify="space-between">
                        {
                            list.map(item => (
                                <Item key={item.title} {...item} />
                            ))
                        }
                    </Grid>
                </Grid>
                {
                    positionList.map(position => (
                        <img key={position.index} alt="Rectangle" src="/assets/images/rect.png" className={styles.rect} style={{...position}} />
                    ))
                }
            </Grid>
        </Grid>
    )
}
