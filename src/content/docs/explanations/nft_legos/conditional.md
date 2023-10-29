---
title: Conditional Rendering
description: Using special conditions to alter the client-side render of an NFT's asset
---

Conditional rendering uses [jsonlogic](https://jsonlogic.com/) to define
client-only render alterations to the NFT's [asset](/explanations/nft_legos/multiasset) based
on certain on and off chain conditions.

For example, an NFT depicting an image of a moon might change to a halfmoon with
a rocket landing on it if it gets 50 🌓 and 30 🚀 emojis on it.

![Conditional Rendering depiction](../../../../assets/cr_01.png)

An NFT of an apple might rot after a certain block, turning into an image of a
rotten apple, or if consumed in time by means of 🍴 emoji, it becomes just an
apple core.

An NFT image of a bicycle can show signs of deterioration and dilapidation if it
was sold more than, say, 50 times.

A wolf image could show a pack if people have minted more than 50 wolves into
this collection, or even sent wolves [into](/explanations/nft_legos/nestable) the original
wolf.

These interactions can have in-game effects, but can also be community-driven
art. A collaborative experience where if enough people interact with an NFT in
some way, its essence changes.

A logic block of an NFT might look something like this:

```json
    "logic": [
        {
            ">": ["emotes.🚀", 50],
            "priority": [2,3,1] // change asset prio based on condition == true
        },
        {
            ">": ["emotes.❄", 100],
            "assets.0.bg": "newhash" // overrides the background image in the catalog, if such a part exists
        },
        {
            "==": ["this.rain", "true"],
            "assets.0.bg": "hash-of-rainy-background"
        }
    ],
```

In the above example, you can see three scenarios playing out:

- if the NFT gets more than 50 rocket [emotes](/explanations/nft_legos/emote), it would show
  a different asset as top priority. So, a moon shows a moon landing if 50
  rockets are on it.
- if the NFT gets more than 50 snow emoji, the default background of the first
  asset will be overridden and show a snowy mountain instead.
- if the NFT has its mutable attribute set to "rain" then the background becomes
  a rainy image

This feature has not yet been added to any implementation of the RMRK renderer,
but there is a bounty available for this. [Get in touch](https://t.me/rmrk_impl)
to learn more.
