module.exports = {
  heroHeading: 'Bringing DeFi to Cosmos',
  heroDesc:
    'The Gravity DEX testnet competition has ended. Winners will be announced on May 18.',
  heroCta: 'Preliminary results',
  heroDate: 'Registration closed. Competition starts May 4',
  indexOverline: 'What is it?',
  indexTitle: 'The Most Advanced Interchain DEX',
  indexDesc:
    'Gravity uses the Inter-Blockchain Communication (IBC) protocol to enable swaps and pools of digital assets between any two blockchains within the Cosmos ecosystem or beyond. Gravity also achieves superior efficiency compared to other AMMs due to its groundbreaking Equivalent Swap Price Model.',
  titleOverline: 'Testnet competition',
  titleTitle: 'For the best traders, the best rewards.',
  titleDesc:
    'Participants competed for the top score, which was based on a combination of their activity and profits. The top ⅓ will receive prizes proportional to their leaderboard position.',
  prizeOverline: 'Prize pool',
  prizeTitle: '$200,000 At Stake',
  prizeDesc:
    'The Gravity DEX testnet competition prize pool totalling more than $200,000 in ATOM and 12 sponsored tokens from the Cosmos ecosystem.',
  mainPrize: 'Main prize',
  bugOverline: 'Prize pool',
  bugCta: 'Bug bounties',
  registerOverline: 'Trade now',
  registerTitle: 'The future of  DeFi started here.',
  registerDesc:
    'The competition has ended. Participant information is being verified, and the winners will be announced on May 18.',
  registerCta: 'Get Updates',
  registerDate: 'Competition ends on May 11',
  countdownTitle: 'Competition ends on May 11',
  register: 'Register',
  privacy: 'Privacy',
  terms: 'T&C',
  codeofconduct: 'Code of conduct',
  updates: 'Updates',
  disclaimer:
    '† This website is maintained by Tendermint. The contents and opinions of this website are those of Tendermint. Tendermint provides links to cryptocurrency exchanges as a service to the public. Tendermint does not warrant that the information provided by these websites is correct, complete, and up-to-date. Tendermint is not responsible for their content and expressly rejects any liability for damages of any kind resulting from the use, reference to, or reliance on any information contained within these websites.',
  registrationDeadlineTitle: 'Registration deadline',
  registrationDeadlineDay: '30',
  registrationDeadlineMonth: 'April',
  competitionTitle: 'Competition',
  competitionDay: '04 - 11',
  competitionMonth: 'May',
  winnersTitle: 'Winners announced',
  winnersDay: '18',
  winnersMonth: 'May',
  ctaFirstUrl:
    'https://medium.com/tendermint/gravity-dex-competition-guide-fcac06e94762',
  ctaFirstOverline: 'Guide',
  ctaFirstTitle: 'Participant Guide',
  ctaSecondUrl:
    'https://medium.com/tendermint/4-things-you-should-know-about-gravity-dex-competition-784be6643d4f',
  ctaSecondOverline: 'Resources',
  ctaSecondTitle: 'Competition Mechanics',
  ctaThirdUrl: 'http://gravitydex.io',
  ctaThirdOverline: 'Support',
  ctaThirdTitle: 'Resources',
  faqOverline: 'Faq',
  faqTitle: 'Frequently asked questions',
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
