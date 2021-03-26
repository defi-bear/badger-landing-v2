import { isMobile } from 'react-device-detect';

const list = [
	{
		img: 'assets/images/vault.png',
		title: 'Sett Vaults',
		textList: [
			[
				{
					text: 'The Sett Vaults are a product for earning',
					letterspacing: '-0.044em'
				},
				{
					text: 'rewards on your staked assets, with a',
					letterspacing: isMobile ? '0.01em' : '0.008em'
				},
				{
					text: 'primary focus on Bitcoin-on-Ethereum',
					letterspacing: isMobile ? '0.015em' : '0.012em'
				},
				{
					text: 'strategies',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'You can earn rewards for staking $Badger',
					letterspacing: '-0.05em'
				},
				{
					text: 'and $DIGG token',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'The Badger Setts are the main hub for',
					letterspacing: isMobile ? '-0.009em' : '-0.01em'
				},
				{
					text: 'Bitcoiners transitioning their funds',
					letterspacing: isMobile ? '0.032em' : '0.029em'
				},
				{
					text: 'across chains to stack sats with the',
					letterspacing: isMobile ? '0.03em' : '0.028em'
				},
				{
					text: 'power of DeFi',
					letterspacing: '0em'
				},
			]
		],
	},
	{
		img: 'assets/images/digg.png',
		title: '$DIGG',
		textList: [
			[
				{
					text: 'DIGG is an elastic supply token',
					letterspacing: '0.075em'
				},
				{
					text: 'targeting the price of Bitcoin, with',
					letterspacing: isMobile ? '0.04em' : '0.038em'
				},
				{
					text: '24 hour rebasing periods',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'It is the first algorithmic token to peg',
					letterspacing: '-0.025em'
				},
				{
					text: 'to an asset that is not USD',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'When staking DIGG in the DIGG vault, you',
					letterspacing: '-0.03em'
				},
				{
					text: 'receive bDIGG, which represents your %',
					letterspacing: isMobile ? '-0.003em' : '-0.005em'
				},
				{
					text: 'in the rebasing liquidity pool, allowing',
					letterspacing: isMobile ? '0em' : '0em'
				},
				{
					text: 'for composability with other DeFi applications',
					letterspacing: isMobile ? '-0.062em' : '-0.064em'
				},
			]	 
		],
		learnMore: 'https://digg.page',
	},
	{
		img: 'assets/images/badgerHead.png',
		title: '$BADGER',
		textList: [
			[
				{
					text: 'BADGER is the token of governing power',
					letterspacing: isMobile ? '-0.023em' : '0.03em'
				},
				{
					text: 'over the BadgerDAO treasury',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'It is issued as a reward for staking',
					letterspacing: '0.01em'
				},
				{
					text: 'in the Badger Setts',
					letterspacing: '0em'
				},
			],
			[
				{
					text: 'bBadger from the BADGER Sett is often',
					letterspacing: '-0.011em'
				},
				{
					text: 'utilized for collaborations with other',
					letterspacing: isMobile ? '0.012em' : '0.01em'
				},
				{
					text: 'DeFi communities, such as MEME',
					letterspacing: '0em'
				},
			], 
		],
	},
	{
		img: 'assets/images/badgerSett.png',
		title: 'Badger Setts on BSC',
		textList: [
			[
				{
					text: 'A Series of vault strategies implemented',
					letterspacing: '-0.04em'
				},
				{
					text: 'on the Binance Smart Chain.',
					letterspacing: '0.01em'
				}
			]
		]
	},
	{
		img: 'assets/images/comingSoon.png',
		title: 'ibBTC (Coming Soon)',
		textList: [
			[
				{
					text: 'Interest-bearing tokenized Bitcoin',
					letterspacing: '0.02em'
				},
				{
					text: 'for DeFi',
					letterspacing: '0em'
				},
			]
		],
	},
	{
		img: 'assets/images/comingSoon.png',
		title: '$CLAWS (Coming Soon)',
		textList: [
			[
				{
					text: 'USD-pegged stablecoin backed by the',
					letterspacing: '0.004em'
				},
				{
					text: 'staked assets in the Sett vaults',
					letterspacing: '0em'
				},
			]
		],
	},
	{
		img: 'assets/images/comingSoon.png',
		title: 'BadgerDEX (Coming Soon)',
		textList: [
			[
				{
					text: 'Layer 2 tokenized Bitcoin swap exchange',
					letterspacing: '-0.038em'
				}
			]
		],
	},
];

const positionList = [
	{ index: 0, left: isMobile ? -10 : -51, top: isMobile ? -25 : -74 },
	{ index: 1, left: isMobile ? -26 : -93, top: isMobile ? -2 : 12 },
	{ index: 2, right: isMobile ? 40 : 93, top: isMobile ? -25 : -74 },
	{ index: 3, right: isMobile ? 5 : -25, top: isMobile ? -45 : -120 },
	{ index: 4, right: isMobile ? -20 : -120, top: isMobile ? 61 : 211 },
	{ index: 5, left: isMobile ? -25 : -95, bottom: isMobile ? 10 : 70 },
	{ index: 6, left: isMobile ? -15 : -45, bottom: isMobile ? -20 : -40 },
	{ index: 7, right: isMobile ? -20 : -85, bottom: isMobile ? 5 : 20 },
];

export { list, positionList };
