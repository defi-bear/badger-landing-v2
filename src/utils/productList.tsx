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
					letterspacing: '0.008em'
				},
				{
					text: 'primary focus on Bitcoin-on-Ethereum',
					letterspacing: '0.012em'
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
					letterspacing: '-0.01em'
				},
				{
					text: 'Bitcoiners transitioning their funds',
					letterspacing: '0.029em'
				},
				{
					text: 'across chains to stack sats with the',
					letterspacing: '0.028em'
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
					letterspacing: '0.077em'
				},
				{
					text: 'targeting the price of Bitcoin, with',
					letterspacing: '0.038em'
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
					letterspacing: '-0.005em'
				},
				{
					text: 'in the rebasing liquidity pool, allowing',
					letterspacing: '0em'
				},
				{
					text: 'for composability with other DeFi applications',
					letterspacing: '-0.064em'
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
					letterspacing: '-0.025em'
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
					letterspacing: '0.01em'
				},
				{
					text: 'DeFi communities, such as MEME',
					letterspacing: '0em'
				},
			], 
		],
	},
	{
		img: 'assets/images/comingSoon.png',
		title: 'bBTC (Coming Soon)',
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
	{ index: 0, left: -51, top: -74 },
	{ index: 1, left: -93, top: 12 },
	{ index: 2, right: 93, top: -74 },
	{ index: 3, right: -25, top: -120 },
	{ index: 4, right: -120, top: 211 },
	{ index: 5, left: -95, bottom: 70 },
	{ index: 6, left: -45, bottom: -40 },
	{ index: 7, right: -85, bottom: 20 },
];

export { list, positionList };
