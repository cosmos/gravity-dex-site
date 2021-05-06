module.exports = {
  heroHeading: '在Cosmos享受DeFi',
  heroDesc:
    'Gravity DEX测试网竞赛已于5月4日开始，ATOM和Cosmos资产组成了一共200,000美元的奖金池。',
  heroCta: '参加',
  heroDate: '报名截止。 比赛于5月4日开始', // TODO
  indexOverline: 'Gravity DEX是什么？',
  indexTitle: '最先进的链间DEX',
  indexDesc:
    'Gravity使用区块链间通信（IBC）协议来实现Cosmos生态系统内外的任何两个区块链之间的数字资产兑换和供应流动性池。基于开创性的均衡兑换价格模型，与其他AMM相比，Gravity还能实现更高的效率。',
  titleOverline: '测试网交易竞赛',
  titleTitle: '让最棒的交易者获胜',
  titleDesc:
    '参加者争夺最高分，取决于他们的活动和利润。前⅓的参加者将获得与其排行榜位置成正比的奖金。参加者必须在至少3个池中进行存款和兑换，才能符合资格领取奖金。',
  prizeOverline: '奖池',
  prizeTitle: '高达 $200,000',
  prizeDesc:
    'Gravity DEX测试网竞赛奖池总额超过200,000美元，由ATOM和来自Cosmos生态系统的10种赞助者代币构成。',
  mainPrize: '主要奖励',
  bugOverline: '奖池',
  bugCta: '错误赏金',
  registerOverline: '报名截止', // TODO
  registerTitle: 'Cosmos的DeFi现在开始', // TODO
  registerTitleUsers: '用户', // TODO
  registerDesc:
    '比赛已经开始。 抢购您的太空服并开始交易，有机会在太空竞赛中取得领先。',
  registerCta: '获取更新', // TODO
  registerDate: '比赛于5月11日結束。', // TODO
  countdownTitle: '比赛于5月11日結束。',
  register: '注册',
  privacy: '隐私政策',
  terms: '条款及细则',
  codeofconduct: '行为准则',
  updates: '最新消息',
  disclaimer:
    '† 本网站由Tendermint维护。本网站的内容和意见属于Tendermint。 Tendermint提供指向加密货币交易所的链接，作为对公众的服务。 Tendermint不保证这些网站提供的信息是否最新的，也不保证此信息的正确性和完整性。 Tendermint对这些内容不承担任何责任，并明确拒绝对由于使用、参考或依赖这些网站中包含的任何信息而造成的任何形式的损害承担任何责任。',
  registrationDeadlineTitle: '注册截止日期',
  registrationDeadlineDay: '30日',
  registrationDeadlineMonth: '4月',
  competitionTitle: '竞赛期间',
  competitionDay: '04 - 11日',
  competitionMonth: '5月',
  winnersTitle: '获奖名单公布',
  winnersDay: '18日',
  winnersMonth: '5月',
  ctaFirstUrl:
    'https://medium.com/tendermint/gravity-dex-%E7%AB%9E%E8%B5%9B%E6%8C%87%E5%8D%97-1c41b6bcf921',
  ctaFirstOverline: '指导', // TODO
  ctaFirstTitle: '竞赛指南', // TODO
  ctaSecondUrl:
    'https://bharvest.medium.com/%E5%85%B3%E4%BA%8Egravity-dex%E7%AB%9E%E8%B5%9B%E7%9A%844%E4%B8%AA%E9%A1%BB%E7%9F%A5%E4%BA%8B%E9%A1%B9-680400094524',
  ctaSecondOverline: '资源',
  ctaSecondTitle: '竞争机制',
  ctaThirdUrl: 'http://gravitydex.io',
  ctaThirdOverline: '协助', // TODO
  ctaThirdTitle: '资源', // TODO
  faqOverline: '常问问题',
  faqTitle: '经常问的问题',
  agendas: [
    {
      title: 'I have run out of ATOM tokens, what should I do?',
      details:
        'When you start the competition you are allocated 500 ATOM tokens. Unfortunately, these will not be replenished once you have run out. You are effectively out of the competition.',
      active: false,
    },
    {
      title:
        'Is there a way to get more ATOM if you spend your last ATOM on gas to trade for ATOM but the transaction fails?',
      details:
        'No. As this is a competition, it would not be fair to people who successfully managed to operate without running out of gas. We understand that some users had multiple failed transactions in a row that consumed the fee. However, as with any transaction, there is always the possibility that an operation will fail. We, therefore, encourage you to ask for support before continuing to burn gas.',
      active: false,
    },
    {
      title: 'Why did my transaction fail?',
      details:
        'The most likely reason for your transaction failing is because you did not have enough funds to cover the transaction costs.',
      active: false,
    },
    {
      title: 'Can I use my own personal ATOM in the competition?',
      details:
        'This is a testnet environment and does not use real ATOM tokens. Please do not send your own mainnet ATOM tokens to the testnet.',
      active: false,
    },
    {
      title: 'I cannot receive ATOM tokens with my Ledger address?',
      details:
        'If you are experiencing issues with your Ledger connection, you should consider importing the Ledger account into Keplr via mnemonics so that you can see your tokens. Check this [useful article](https://medium.com/tendermint/gravity-dex-competition-guide-fcac06e94762) for guidance on this.',
      active: false,
    },
    {
      title:
        'I get a "failed to execute" message when I try to swap tokens. What should I do?',
      details:
        'Please try the same transaction using smaller amounts of funds.',
      active: false,
    },
    {
      title: 'Are there any public APIs for the Gravity DEX?',
      details:
        'The Gravity DEX testnet is now optimized for automated trading. For arbitrage bot operators, you can connect the following APIs: \n\n - REST: [https://competition.bharvest.io:1317](https://competition.bharvest.io:1317) \n\n - RPC: [https://competition.bharvest.io](https://competition.bharvest.io) \n\n - GRPC: [competition.bharvest.io:9090](competition.bharvest.io:9090)',
      active: false,
    },
    {
      title:
        "Is the internal price ratio supposed to be the price it trades in the DEX? It's different from the price on the swap page.",
      details:
        'There was some initial sync delay in the price page causing a gap between the global price and the pool price. We have worked on optimizing this and the issue should now be resolved.',
      active: false,
    },
    {
      title:
        'Why are the gas fees so high? At 0.3 ATOM ($7-8) per transaction?',
      details:
        'The gas fee has been set this way to encourage players to carefully think about their strategies and consider the price of gas. Often, because tokens are not real, people spend gas without consideration. \n\n It also allows us to slowly stabilize the testnet, as a higher gas fee helps to prevent an explosion of transactions. We will gradually reduce the minimum gas fee when we upgrade to better servers. \n\n Keep in mind that this is a testnet and the final product will not be the same. The Gravity DEX that $ATOM stakers voted into the Cosmos Hub will have drastically lower tx fees ($0.01-$0.10).',
      active: false,
    },
    {
      title:
        'Why do I see "insufficient balance" when I clearly have enough funds?',
      details:
        'You need to have sufficient coins in your wallet for BOTH currencies involved. Check that you have sufficient balance on both sides as adding liquidity requires two different coins to receive a pool coin. Note, this is only the case if you want to add liquidity to a pool, this does not apply if you just want to swap.',
      active: false,
    },
    {
      title:
        'Is there going to be a gas-free day so that I can take part again?',
      details:
        'No, we decided that this would be unfair to those who carefully executed swaps considering the gas cost.',
      active: false,
    },
    {
      title:
        'Any chance of being able to pay fees post-swap so that I can recover from 0-ATOM balance?',
      details:
        'Unfortunately, no, as this would be very unfair to those participants who didn’t run out of ATOM.',
      active: false,
    },
    {
      title: "Why can't I create a pool?",
      details:
        'At this point of the competition, all the pools have already been created by the participants. Instead, you can add liquidity to existing pools. \n\n If you have further questions, please visit the Cosmos community [Discord channel](https://discord.gg/vcExX9T). The team will be able to address your questions there. Alternatively, you can send an email to &#099;&#111;&#109;&#109;&#117;&#110;&#105;&#099;&#097;&#116;&#105;&#111;&#110;&#115;&#064;&#099;&#111;&#115;&#109;&#111;&#115;&#046;&#110;&#101;&#116;&#119;&#111;&#114;&#107; and if you find a bug, you can report it here: \n\n [github.com/tendermint/liquidity](https://github.com/tendermint/liquidity).\n\n Here are some more invaluable resources for you when using the Gravity DEX testnet: \n\n\n - [Tutorial](https://medium.com/tendermint/gravity-dex-competition-guide-fcac06e94762) \n\n - [4 Things you should know about Gravity Dex Competition](https://medium.com/tendermint/4-things-you-should-know-about-gravity-dex-competition-784be6643d4f) \n\n - [Keplr FAQ](https://faq.keplr.app)',
      active: false,
    },
  ],
}
