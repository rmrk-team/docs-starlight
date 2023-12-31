---
title: Multi-asset NFTs
description: Multi-asset NFTs or modular multi-multimedia NFTs allow an NFT to have different output versions
---

An _asset_ is a type of output for an NFT: usually a media file.

An asset can be an image, a movie, a PDF file, or even a
[catalog](/explanations/nft_legos/equippable). A multi-asset NFT is one that can
output a different asset based on specific contextual information, e.g. load a
PDF if loaded into a PDF reader, vs. loading an image in a virtual gallery, but
both the PDF and the image are part of the same NFT.

![Cloud of different media icons connected to an illustration of a cat in the
center](../../../../assets/mr_01.png)

An asset is NOT an NFT or a standalone entity you can reference. It is _part_ of
an NFT - one of several _outputs_ it can have.

Every multi-asset NFT has zero or more assets. When it has zero, the metadata is
"root level". Any new asset added to this NFT will override the root metadata,
making this NFT [revealable](/explanations/usecases/revealable).

## Examples

It is best to explain with some examples.

- [Revealable NFTs](/explanations/usecases/revealable) - mint identical NFTs and reveal them
  as unique later, all on chain without centralizing metadata
- [Cross-game skin files](/explanations/usecases/cross_game_skins) - supporting different
  game engines for cross-game cosmetics in the same NFT
- [Backing up NFT metadata](/explanations/usecases/backups) - metadata redundancy and safety
  without centralized actors
- [Ticketing systems](/explanations/usecases/ticketing) - tickets and ticket-stubs for proof
  of attendance and access
- [Mixed Media NFTs](/explanations/usecases/mixedmedia) - eBooks that are audio and PDF at
  the same time, songs that are music videos and audio files at the same time,
  paintings with making-of videos, and more.

### Equippables and Forward Compatibility

When using the [Nestable](/explanations/nft_legos/nestable) and
[Equippable](/explanations/nft_legos/equippable) NFTs, a multi-asset NFT can be
made compatible with collections coming out in the future, adding permanent and
forward-compatible utility to an NFT project that might otherwise die from lack
of community interest post-launch.

As an example, a pickaxe compatible with a
[Chunky](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies)
in [Skybreach](https://skybreach.app) would have a pixel-drawn asset compatible
with the Skybreach game engine.

![A 2d pixelated version of a character and item next to a 3d version of the
same concepts](../../../../assets/mr_02.png)

Should a new 3D game come out later on, this same NFT can be made compatible
with it easily. The issuer would add a new 3D asset to it, compatible with the
new game's engine. Every owner accepting this new asset in their NFT would
automatically have a more valuable NFT on their hands - no unrelated airdrops
needed, no token spam in owner wallets, no disjointed experiences. Just an NFT
that can be and do _more_.

This not only adds more life to existing NFT projects, it also introduces the
concept of dynamic rarity where the more collections an NFT is made compatible
with, the more demand and thus value it has.

## Proposing, Accepting, Replacing

Adding a new asset into a multi-asset NFT requires the consent of both the
issuer and the NFT's owner.

![Illustration of two people on a couch, agreeing on something. One of them is
in a popup window, indicating remote connection.](../../../../assets/mr_03.png)

Specifically, only the issuer of the collection can propose a new asset, and
only the owner can accept it. If the issuer and owner are the same, no accept
step is necessary.

An owner of an NFT cannot add new assets onto their own NFT. This prevents
mock-value from being added to an NFT.

An issuer cannot add new assets to an NFT without the owner's approval. This
approval can be made ahead of time, or it can be made on-demand as a new asset
is proposed. This prevents art rugpulls by the project issuers.

Multi-asset NFTs are specified as a standard in
[ERC-5773](https://eips.ethereum.org/EIPS/eip-5773). The Multi-asset NFT
implementation by RMRK is documented in the [reference](/reference/intro) and
exemplified in the [guides](/guides/intro).

The easiest way to launch Multi-asset NFTs is to use the
[mini-apps](/explanations/minis).
