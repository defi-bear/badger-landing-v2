import { isMobile } from 'react-device-detect';

const roadmapList = [
	{
		title: 'Q2 2021',
		texts: [
			'- ibBTC - an interest-earning tokenized Bitcoin',
			'- $MEME NFT Campaign pt 2',
			'- BadgerDEX the Layer 2 tokenized Bitcoin swap exchange',
		],
	},
	{
		title: 'Q1 2021',
		texts: [
			'- Launch of Nexus Mutual Insurance',
			'- $MEME NFT campaign featuring bBadger',
			'- Second audit by Haechi',
			'- Launch of $DIGG token',
			'- $DIGG stability vault',
			'- Badger Zaps',
			'- RenVM integration bridging BTC directly to Badger Setts',
			'- $CLAWS: USD-pegged stablecoin backed by Badger Setts',
		],
	},
	{
		title: 'Q4 2020',
		texts: [
			'- Developer collective contracted to build a DAO to govern the parameters of the elastic supply token',
			'- Badger DAO brand was born',
			'- Partnerships formed with various DeFi DAOs',
			'- $Badger & Sett Vaults audited',
			'- Launch of $Badger and Sett Vaults',
		],
	},
	{
		title: 'Q3 2020',
		texts: ['- Ideation for elastic supply rebasing token targeting the price of Bitcoin'],
	},
];

const mobileRoadmapList = [
	{
		title: 'Q2 2021',
		texts: [
			[
				{
					text: '- ibBTC - an interest', letterspacing: '-0.05em',
				},
				{
					text: 'earning tokenized Bitcoin', letterspacing: '-0.04em',
				}
			],
			[
				{
					text: '- $MEME NFT Campaign pt 2', letterspacing: '-0.05em',
				}
			],
			[
				{
					text: '- BadgerDEX the Layer 2', letterspacing: '-0.01em',
				},
				{
					text: 'tokenized Bitcoin swap', letterspacing: '0.005em',
				},
				{
					text: 'exchange', letterspacing: '-0.05em',
				},
			]
		],
	},
	{
		title: 'Q1 2021',
		texts: [
			[
				{
					text: '- Launch of Nexus Mutual', letterspacing: '-0.02em',
				},
				{
					text: 'Insurance', letterspacing: '-0.05em',
				}
			],
			[
				{
					text: '- $MEME NFT campaign', letterspacing: '0.04em',
				},
				{
					text: 'featuring bBadger', letterspacing: '0.04em',
				}
			],
			[
				{
					text: '- Second audit by Haechi', letterspacing: '-0.01em',
				}
			],
			[
				{
					text: '- Launch of $DIGG token', letterspacing: '0.01em',
				}
			],
			[
				{
					text: '- $DIGG stability vault', letterspacing: '0.025em',
				}
			],
			[
				{
					text: '- Badger Zaps', letterspacing: '0em',
				}
			],
			[
				{
					text: '- RenVM integration', letterspacing: '0.08em',
				},
				{
					text: 'bridging BTC directly to', letterspacing: '-0.01em',
				},
				{
					text: 'Badger Setts', letterspacing: '0em',
				},
			],
			[
				{
					text: '- $CLAWS: USD-pegged', letterspacing: '0.05em',
				},
				{
					text: 'stablecoin backed by', letterspacing: '0.058em',
				},
				{
					text: 'Badger Setts', letterspacing: '0em',
				},
			],
		],
	},
	{
		title: 'Q4 2020',
		texts: [
			[
				{
					text: '- Developer collective', letterspacing: '0.015em',
				},
				{
					text: 'contracted to build a DAO', letterspacing: '-0.03em',
				},
				{
					text: 'to govern the parameters', letterspacing: '-0.04em',
				},

				{
					text: 'of the elastic supply token', letterspacing: '-0.055em',
				},
			],
			[
				{
					text: '- Badger DAO brand was', letterspacing: '0em',
				},
				{
					text: 'born', letterspacing: '0em',
				},
			],
			[
				{
					text: '- Partnerships formed', letterspacing: '0.015em',
				},
				{
					text: 'with various DeFi DAOs', letterspacing: '0em',
				},
			],
			[
				{
					text: '- $Badger & Sett Vaults', letterspacing: '0em',
				},
				{
					text: 'audited', letterspacing: '0em',
				},
			],
			[
				{
					text: '- Launch of $Badger and', letterspacing: '-0.01em',
				},
				{
					text: 'Sett Vaults', letterspacing: '0em',
				},
			],
		],
	},
	{
		title: 'Q3 2020',
		texts: [
			[
				{
					text: '- Ideation for elastic', letterspacing: '0.03em',
				},
				{
					text: 'supply rebasing token', letterspacing: '0.02em',
				},
				{
					text: 'targeting the price of', letterspacing: '0.02em',
				},
				{
					text: 'Bitcoin', letterspacing: '0em',
				},
			],
		],
	},
];

const cloudList = [
	{ img: 'cloud1.png', left: isMobile ? '-20px' : 'calc(50% - 800px)', top: isMobile ? 250 : 370, width: isMobile ? 60 : 120 },
	{ img: 'cloud2.png', left: isMobile ? '45px' : 'calc(50% - 650px)', top: isMobile ? 300 : 470, width: isMobile ? 38 : 75 },
	{ img: 'cloud3.png', right: isMobile ? '-20px' : 'calc(50% - 625px)', top: isMobile ? 160 : 300, width: isMobile ? 80 : 153 },
	{ img: 'cloud4.png', right: isMobile ? '-70px' : 'calc(50% - 825px)', top: isMobile ? 550 : 850, width: isMobile ? 144 : 355 },
	{ img: 'cloud5.png', left: isMobile ? '-20px' : 'calc(50% - 755px)', top: isMobile ? 900 : 1300, width: isMobile ? 104 : 200 },
	{ img: 'cloud6.png', left: isMobile ? '120px' : 'calc(50% - 500px)', top: isMobile ? 980 : 1430, width: isMobile ? 38 : 74 },
	{ img: 'cloud7.png', right: isMobile ? '-20px' : 'calc(50% - 585px)', bottom: isMobile ? 200 : 400, width: isMobile ? 105 : 300 },
];

export { roadmapList, mobileRoadmapList, cloudList };
