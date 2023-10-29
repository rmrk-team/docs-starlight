---
title: Ticketing
description: Using modular NFTs to solve event ticketing
---

Traditionally in blockchain-based ticketing systems, a user is expected to buy
an NFT ticket and then on location of an event do one of the following:

1. show the NFT and sign a message
2. burn the NFT
3. show the NFT

1 and 2 require the user to have a wallet, or surrender control of it - i.e.
have a custodial wallet in his account in a centralized ticketing provider's
system. This is neither very web3, nor very secure.

3 is very insecure in that anyone can just download the NFT and show it instead
of the real owner. This will either let an infinite number of people in, or
require centralized tracking on the gatekeeper side so make sure a single QR
code did not enter twice. Even then, there is no guarantee the right person got
in.

There is a better way: [RMRK's Multi-Asset
NFTs](/explanations/nft_legos/multiasset).

## Using Multi-Asset NFTs for Ticketing

Several approaches are possible. Here we document the recommended one.

A user buys an NFT ticket. The ticket, just by being a RMRK NFT, is compatible
with ERC721 and thus all marketplaces, but is also enriched with more
functionality. While buying, the user provides a custom string, like a special
keyword, which is hashed and added as the ticket's attribute. Let's assume this
special string is `banana` and the Sha1 hash of it is
`250e77f12a5ab6972a0895d290c4792f0a326ea8`.

The null-asset is set to be the ticket itself. The null-asset is the initial
asset, the default shown when no other assets are available. Null-assets are
typically used for [revealable NFTs](/explanations/usecases/revealable), and
these come in very handy in this scenario.

The user shows up at the door of the event, and displays the NFT QR code.

The gatekeeper scans the QR code, and asks the user for the keyword. The user
says "pineapple", and the gatekeeper's software automatically runs it through
sha1 to get `ff9907a80070300578eb65a2137670009e8c17cf`. Whoops! You do not seem
to be the real owner! NEXT!

This fraudster is kicked out of the queue and the processing continues. A few
people later, another person shows up with the same QR of the NFT, and the
correct word: `banana`. The software again runs it, this time it matches.

The gatekeeper's app now creates a new asset - a "ticket stub" image with some
cool visuals, and adds it to the NFT that was just loaded via the QR code.

Since _any_ asset takes precedence over _null_, the original ticket asset would
be overwritten by this new one, the ticket stub, proving the attendance of this
user, and marking the NFT as "used", all in a fully decentralized way - all on
chain.

### Advantages

1. The users ends up with a really cool looking POA
2. There is no need for a centralized database of used-up tickets
3. There is no need for a user to carry around a mobile wallet

### Downsides

1. If the internet goes out, you cannot verifiably "tear" people's tickets, and
   need to trust that they are the real owners. They probably miss out on the
   "POA" (proof of attendance) aspect of it then too, since they never get the
   extra asset.
