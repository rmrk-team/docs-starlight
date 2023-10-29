---
title: About Decentralized Storage
description: How does asset storing work with RMRK?
---

To store content when launching NFTs, the RMRK team prefers to use IPFS and the
help of commercial pinning services. Let's unpack this a little.

IPFS, or Interplanetary File System, uses "content hashing". This means a piece
of content is put through a hashing algorithm, a one-way mathematical function
which always produces the same output for the same input. Changing even a single
letter in the original content produces a completely different hash.

These hashes are then turned into content addresses like so:
`ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR` which a browser or
[IPFS gateway](https://docs.ipfs.io/concepts/ipfs-gateway/) can access.

Many machines around the world run the IPFS protocol and advertise which content
hashes they host, so that if a certain piece of content needs to be found, a
path can be established to it.

These machines, when they access this piece of content, download it and rehost
it, keeping it in their memory, allowing you to consume it and advertising to
others that they have a copy, propagating it across the web. But unless the
content is _pinned_ it will disappear after a certain period of time of not
being accessed, or once the machine reboots via a process known as garbage
collection.

Pinned content is never garbage collected.

Several services exist that download and pin IPFS content for you, for a fee.

[Pinata](https://pinata.cloud), [Crust](https://crust.network), and
[Filebase](https://filebase.com) are very popular ones. Alternatively, you can
[run your own
node](https://medium.com/ethereum-developers/how-to-host-your-ipfs-files-online-forever-f0c56b9b5398)
and pin the content there, but your node would have to be always online and
accessible via the internet for this to work, which is not something most people
can run at home.

When hosting NFT content on IPFS, you are expected to pay for pinning of your
own content with one such service, or otherwise make sure the content is
persistent and will not disappear.

Different minting platforms will have different approaches to pinning fees: some
will apply them to minting fees when you mint your NFT, others will ask you to
pre-pay in credit. Others still will subsidize these costs to attract users.

For example, the official modular NFT marketplace
[Singular](https://singular.app) uses the combined approach where pinning fees
are added on top of the minting fee. Adding more assets to an existing NFT also
incurs additional per-asset fees which are manually defined per-chain and vary
based on the chain's average gas costs.

### Why not Storage Chains?

You may be wondering why not use Arweave, Filecoin, and similar?

We believe storage-chains are inherently temporary in nature and not at all as
eternal as their proponents make them up to be, because by definition they are
trapped in a "race to the bottom" with every new chain that shows up. It is a
constant free-for-all vampire attack where each chain competes to siphon the
users away from the last.

As the incentives of these chains dry up, so will the file providers who earn
money by storing and propagating people's content. As such, all storage chains
are temporary, whereas a protocol is indestructible.

We feel much more comfortable using a decentralized protocol and then assisting
it with paid actors to improve availability, than to put all our eggs in one
basket which can disappear without notice.

However, users can pick according to their own preference. Not only does RMRK
not enforce any particular storage mechanism - everything from base64 encoded
right into the metadata to simple HTTPs is allowed - we also encourage using
multi-asset NFTs to store the same content on multiple redundant services at the
same time. For more information, see the [metadata backup use
case](/explanations/usecases/backups).
