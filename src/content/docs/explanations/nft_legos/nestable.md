---
title: Nestable NFTs
description: Nestable NFTs in the context of modular NFT structures 
---

The concept of _nestable_ NFTs refers to NFTs being able to _own_ other NFTs.

At its core, the principle is simple: the owner of an NFT does not have to be an
externally owned account or a smart contract, it can also be a specific NFT.

The process of sending an NFT into another is functionally identical to sending
to another user. The process of sending an NFT _out_ of another NFT involves
issuing a transaction from the address which owns the _parent_ NFT.

The depth is infinite, and any child NFT can own any number of other child NFTs.

Some NFTs can be configured with special conditions for parent-child
relationships. For example:

- some parent NFTs will allow the owner of a child NFT to withdraw that child at
  any time (e.g. virtual land containing an avatar)
- some parent NFTs will be prohibited from executing certain interactions on a
  child (e.g. the owner of a house in which someone else's avatar is a guest
  should not be able to BURN the guest... probably)
- some parent NFTs will have special withdrawal conditions, like a music NFT
  that accepts music stems. The stems can be removed by their owners until a
  certain number of co-composers upvote a stem enough, or until the owner of the
  parent music track seals and "publishes" it

The concept of nested NFTs is further expanded through the idea of
[equippability](/explanations/nft_legos/equipabble).

Nestable NFTs are specified as a standard in
[ERC-7401](https://eips.ethereum.org/EIPS/eip-7401). The Nestable NFT
implementation by RMRK is documented in the [reference](/reference/intro) and
exemplified in the [guides](/guides/intro).

The easiest way to launch Nestable NFTs is to use one of the [mini
apps](/explanations/minis).
