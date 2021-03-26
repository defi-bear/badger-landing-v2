import React from 'react';
import { Grid, makeStyles, Typography, Button } from '@material-ui/core';
// @ts-ignore
import Fade from 'react-reveal/Fade';
import { isMobile } from 'react-device-detect';

import InfoText from './InfoText';
import MainBadgerImage from './MainBadgerImage';

const useStyles = makeStyles((theme) => ({
	main: {
		width: '100%',
		padding: `${ isMobile ? '23px 35px 48px 35px' : '70px 160px 80px 140px' }`,
		background: `url(assets/images/mainBack${isMobile ? '1' : ''}.png)`,
		backgroundSize: 'cover',
	},
	circle: {
		width: '150%',
		left: '-25%',
		borderRadius: '50%',
		backgroundColor: 'white',
		position: 'absolute',
		top: `${ isMobile ? 120 : 93 }%`,
		height: 120,
	},
	subMain: {
		maxWidth: 1120
	},
	buildText: {
		marginTop: `${ isMobile ? 15: 76 }px`,
		fontSize: `${ isMobile ? 20.3 : 40}px`,
		color: theme.palette.secondary.contrastText,
		lineHeight: `${ isMobile ? 30 : 55 }px`,
	},
	description: {
		fontFamily: 'POperator',
		fontSize: `${ isMobile ? 18 : 25 }px`,
		color: theme.palette.secondary.contrastText,
		fontWeight: 400,
		opacity: 0.8,
		lineHeight: '26.12px',
		letterSpacing: `${ isMobile ? 0.01 : -0.022 }em`,
		marginTop: `${ isMobile ? 15 : 6 }px`,
		textAlign: 'justify',
		maxWidth: 520
	},
	boldDescription: {
		fontWeight: 700,
		letterSpacing: '0.02em'
	},
	viewAudit: {
		borderRadius: 10,
		background: theme.palette.primary.main,
		height: 42,
		marginTop: 15,
		padding: '6px 12px',
		'&:hover': {
			background: theme.palette.primary.dark,
			opacity: 1
		},
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
	infoContainer: {
		paddingTop: `${isMobile ? 25 : 35 }px`,
		borderTop: '3px solid rgba(255,255,255, 0.3)',
		maxWidth: 1120,
		flexWrap: 'wrap'
	},
	mobileSubMain: {
		paddingBottom: 31.4
	}
}))

export default function TopPart() {
	const styles = useStyles();

	const onAudit = () => {
		window.open('https://badger.finance/wp-content/uploads/2021/01/HAECHI-AUDIT-BadgerDAO-Smart-Contract-Audit-Report-1.pdf', '_blank');
	}
    return (
        <Grid container className={styles.main} justify="center">
			{
				isMobile ? (
					<Grid container className={styles.mobileSubMain}>
						<Grid container justify="flex-start">
							<MainBadgerImage />
						</Grid>
						<Grid container>
							<Fade bottom>
								<Typography className={styles.buildText}>Building DeFi for Bitcoin</Typography>
							</Fade>
							<Fade bottom delay={500}>
								<Typography className={styles.description}><span className={styles.boldDescription}>BadgerDAO</span> is a decentralized collective of developers, strategists, and content creators who seek to build and support new Bitcoin-focused products for the DeFi (Decentralized Finance) ecosystem</Typography>
							</Fade>
							<Fade bottom delay={1000}>
								<Button className={styles.viewAudit} onClick={onAudit}>
									View our Audits
									<img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
								</Button>
							</Fade>
						</Grid>
					</Grid>
				) : (
					<Grid container className={styles.subMain}>
						<Grid item xs={6}>
							<Grid container>
								<Fade bottom>
									<Typography className={styles.buildText}>Building DeFi for Bitcoin</Typography>
								</Fade>
								<Fade bottom delay={500}>
									<Typography className={styles.description}><span className={styles.boldDescription}>BadgerDAO</span> is a decentralized collective of developers, strategists, and content creators who seek to build and support new Bitcoin-focused products for the DeFi (Decentralized Finance) ecosystem</Typography>
								</Fade>
								<Fade bottom delay={1000}>
									<Button className={styles.viewAudit} onClick={onAudit}>
										View our Audits
										<img draggable={false} alt="Arrow Icon" src="/assets/images/arrow1.png" className={styles.arrowImg} />
									</Button>
								</Fade>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Grid container justify="flex-end">
								<MainBadgerImage />
							</Grid>
						</Grid>
					</Grid>
				)
			}
			<Grid container direction="row" className={styles.infoContainer}>
				<Grid item xs={ isMobile ? 6 : 2 }>
					<InfoText topText='$57.54' bottomText='Badger price' />
				</Grid>
				<Grid item xs={ isMobile ? 6 : 2 }>
					<InfoText topText='7,000+' bottomText='Badger HODLers' />
				</Grid>
				<Grid item xs={ isMobile ? 6 : 2 }>
					<InfoText topText='$42,000' bottomText='DIGG price' />
				</Grid>
				<Grid item xs={ isMobile ? 6 : 2 }>
					<InfoText topText='1000+' bottomText='DIGG HODLers' />
				</Grid>
			</Grid>
        </Grid>
    )
}