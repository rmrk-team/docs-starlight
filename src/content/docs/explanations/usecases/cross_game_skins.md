---
title: "Cross-game skins"
---

> A use case of [Mixed Media NFTs](/explanations/usecases/mixedmedia).

When talking about in-game cosmetic items, a common complaint of game developers
and gamers alike about implementing NFTs into video games is the inability to
make the same file compatible across different engines. E.g. a skin file that is
mapped to a CSGO model definitely does not work with Fortnite.

This is accurate when looking at it from the perspective of current technology,
but [RMRK Multi Asset NFTs](/explanations/nft_legos/multiasset) are uniquely
positioned to completely solve this issue.

Let's take for example a Fortnite skin, and a Borderlands skin of Fabio
Sparklemane / random horsehead (and let's pretend they are the same thing).

![Two different visualizations of a unicorn head, one cartoony and one
celshaded](../../../../assets/merge.png)

The difference is not just in the rigging of the skin for the 3D model, but
clearly visual too - the Borderlands skin needs cel-shaded baking of visual
style to get the comic-book lines in, and has flat, pastel colors without glare.
The Fortnite skin is more plastic-shiny, going for cartoony with realistic
shading.

Naturally, they are not compatible.

So how can we make this into a single NFT which empowers creators through _both_
platforms? How do we get this one asset compatible with both games?

We add the two different skin files as two different assets on the same NFT.

![Two assets being linked through RMRK in the center, indicating a single
NFT](../../../../assets/mures_skin.jpg)

But which one gets shown on the various NFT marketplaces?

This is where priority comes in. Every owner of a multi-asset NFT can order the
assets by priority. The marketplace should then, if it follows the standard,
read one by one and show the first supported highest priority one.

But what if neither is very good for a marketplace? What if they are both 3D
t-poses, or even worse, a skinned texture?

![A t-posed character, and a stretched texture](../../../../assets/stretch.jpeg)

In that case, we can add a third asset, a stylized version specifically designed
for display on various marketplaces and catalogs. Kind of a "cover image" for
the skin.

![A third asset is added to the NFT](../../../../assets/mures3.jpg)

Now we have one asset (output) intended for use in one game, one intended for
use in another, and one intended for main view in social media OG images,
marketplaces, wallets, etc. The games identify which file they need by going
through the assets and loading the compatible one(s) according to metadata, but
since the "cover" image has priority order 1, it will always show first in the
UIs.

## FAQ

### What about scaling?

How can AAA publishers expect to use the cost-unpredictable Ethereum chain, or
any other public blockchain, for a regularly used NFT infrastructure?

The answer is that they do not have to.

When dealing with an example such as the one above, once it is imported into a
game, that is where the skin is used. Read operations on the blockchain are free
and carry no gas cost, meaning a game can check if a skin is
[INSIDE](/explanations/nft_legos/nestable) another relevant NFT to give the
player access to what he needs access to at any point and for free.

The only time a player needs to interact with the blockchain is when moving
assets out of one game and into others, and:

- such operations are not massive gas guzzlers, so would not affect gas cost in
  spikes
- such operations can be handled on an L2 focused on NFTs specifically
- once moved into another game, the NFT needn't be touched again until it is
  time to move it

Scaling issues are a non-problem.

### Why not do this in the old, centralized way? What is in it for them?

AAA publishers will never agree to solve this by using old-school technology
because they cannot agree on the API and approach to take. Each thinks their
standard is best, and as such refuse to interoperate.

Additionally, the ROI is questionable with someone at the helm (and someone
needs to be at the helm in centralized technologies), because that entity
disappearing can throw everything into disarray. Some entity must run the
servers, after all, and keep the infra safe.

A much better option is using generic, unbiased technology (blockchain and a
neutral standard), to allow each entity to keep using their own "best" standard,
because multi-asset NFTs allow for multiple standards in one object.

As for what is in it for them: a massive, creator-empowering global economy. By
making assets cross-game compatible, you breed familiarity with the other brand
in all other upcoming and past brands, inherit player bases, prevent
vampire-attacks between games and publishers, and perhaps most importantly,
allow the unfathomably all-around profitable [global item economy](/explanations/usecases/econ).

### What about usability / user experience?

A common concern with NFTs in traditional games is the usability aspect: how do
you get the next generation to use wallets, sign transactions, and practice good
opsec hygiene. It is a hard problem, no doubt. But:

1. Without starting the onboarding of the next billion users, no one will be
   onboarded.
2. Once an NFT is bridged into a game, it can be used as usual - no TXs needed
   except when withdrawing and depositing, and that minor friction will be
   absent for most players, and acceptable to the others, especially if pulled
   off well by the AAA publishers (built-in wallets into player accounts, etc).
