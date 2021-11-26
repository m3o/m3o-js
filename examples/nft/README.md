# Nft

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Nft/api](https://m3o.com/Nft/api).

Endpoints:

## Vote

Vote to have the NFT api launched faster!


[https://m3o.com/nft/api#Vote](https://m3o.com/nft/api#Vote)

```js
const { NftService } = require('m3o/nft');

const nftService = new NftService(process.env.M3O_API_TOKEN)

// Vote to have the NFT api launched faster!
async function voteForTheApi() {
	const rsp = await nftService.vote({
  "message": "Launch it!"
})
	console.log(rsp)
	
}

voteForTheApi()
```
