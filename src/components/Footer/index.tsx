import React from 'react';
import { makeStyles, Grid, Typography, Link, Button } from '@material-ui/core';

import { FooterItemList } from './FooterItemList';

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.info.main,
    padding: 50
  },
  logoWrapper: {
    paddingTop: 8
  },
  logo: {
    width: 53,
  },
  badgerText: {
    fontFamily: 'P2P',
    fontSize: 18,
    color: 'white'
  },
  title: {
    fontSize: 18,
    color: theme.palette.info.contrastText,
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
  },
  itemIcon: {
    width: 26,
    marginRight: 8,
  },
  itemText: {
    fontSize: 25,
    color: theme.palette.info.contrastText,
    fontFamily: 'POperator',
  },
}))

export default function Footer() {
  const styles = useStyles();

  return (
    <Grid container className={styles.main}>
      <Grid item xs={3}>
        <Grid container alignItems="center" className={styles.logoWrapper}>
          <img alt="Badger Logo" src="assets/images/logo.png" className={styles.logo} />
          <Typography className={styles.badgerText}>Badger</Typography>
        </Grid>
      </Grid>
      {
        FooterItemList.map(footerItems => (
          <Grid key={footerItems.title} item xs={3}>
            <Grid container>
              <Typography className={styles.title}>{footerItems.title}</Typography>
              <Grid container>
                {
                  footerItems.items.map(item => (
                    <Grid container key={item.title}>
                      <Link>
                        <Grid container direction="row" alignItems="center" className={styles.item}>
                          <img alt={item.title} src={`assets/images/${item.icon}`} className={styles.itemIcon} />
                          <Typography className={styles.itemText}>{item.title}</Typography>
                        </Grid>
                      </Link>
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
          </Grid>
        ))
      }
    </Grid>
  )
}