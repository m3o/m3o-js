# Nft

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Nft/api](https://m3o.com/Nft/api).

Endpoints:

## Collections

Get a list of collections


[https://m3o.com/nft/api#Collections](https://m3o.com/nft/api#Collections)

```js
const { NftService } = require('m3o/nft');

const nftService = new NftService(process.env.M3O_API_TOKEN)

// Get a list of collections
async function listCollections() {
	const rsp = await nftService.collections({
  "limit": 1
})
	console.log(rsp)
	
}

listCollections()
```
## Assets

Return a list of assets


[https://m3o.com/nft/api#Assets](https://m3o.com/nft/api#Assets)

```js
const { NftService } = require('m3o/nft');

const nftService = new NftService(process.env.M3O_API_TOKEN)

// Return a list of assets
async function getAlistOfAssets() {
	const rsp = await nftService.assets({
  "limit": 1,
  "order_by": "sale_date"
})
	console.log(rsp)
	
}

getAlistOfAssets()
```
## Create

Create your own NFT (coming soon)


[https://m3o.com/nft/api#Create](https://m3o.com/nft/api#Create)

```js
const { NftService } = require('m3o/nft');

const nftService = new NftService(process.env.M3O_API_TOKEN)

// Create your own NFT (coming soon)
async function createAnNft() {
	const rsp = await nftService.create({
  "description": "The epic monkey island character",
  "name": "Guybrush Threepwood"
})
	console.log(rsp)
	
}

createAnNft()
```
