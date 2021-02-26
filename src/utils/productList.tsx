const list = [
    {
        img: "assets/images/vault.png",
        title: "Sett Vaults",
        textList: [
            'The Sett Vaults are a product for earning rewards on your staked assets, with a primary focus on Bitcoin-on-Ethereum strategies',
            'You can earn rewards for staking $Badger and $DIGG token',
            'The Badger Setts are the main hub for Bitcoiners transitioning their funds across chains to stack sats with the power of DeFi'
        ],
    },
    {
        img: "assets/images/digg.png",
        title: "$DIGG",
        textList: [
            'DIGG is an elastic supply token targeting the price of Bitcoin, with 24 hour rebasing periods',
            'It is the first algorithmic token to peg to an asset that is not USD',
            'When staking DIGG in the DIGG vault, you receive bDIGG, which represents your % in the rebasing liquidity pool, allowing for composability with other DeFi applications'
        ],
        learnMore: 'https://digg.page'
    },
    {
        img: "assets/images/badgerHead.png",
        title: "$BADGER",
        textList: [
            'BADGER is the token of governing power over the BadgerDAO treasury',
            'It is issued as a reward for staking in the Badger Setts',
            'bBadger from the BADGER Sett is often utilized for collaborations with other DeFi communities, such as MEME'
        ],
    },
    {
        img: "assets/images/comingSoon.png",
        title: "bBTC (Coming Soon)",
        textList: [
            'Interest-bearing tokenized Bitcoin for DeFi',
        ],
    },
    {
        img: "assets/images/comingSoon.png",
        title: "$CLAWS (Coming Soon)",
        textList: [
            'USD-pegged stablecoin backed by the staked assets in the Sett vaults',
        ],
    },
    {
        img: "assets/images/comingSoon.png",
        title: "BadgerDEX (Coming Soon)",
        textList: [
            'Layer 2 tokenized Bitcoin swap exchange',
        ],
    }
]

const positionList = [
    { index: 0, left: -51, top: -74 },
    { index: 1, left: -93, top: 12 },
    { index: 2, right: 93, top: -74 },
    { index: 3, right: -25, top: -120 },
    { index: 4, right: -120, top: 211 },
    { index: 5, left: -95, bottom: 70 },
    { index: 6, left: -45, bottom: -40 },
    { index: 7, right: -85, bottom: 20 },
]

export { list, positionList }