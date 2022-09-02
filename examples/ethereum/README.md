# Ethereum

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ethereum/api](https://m3o.com/Ethereum/api).

Endpoints:

## Transaction

Get transaction details by hash


[https://m3o.com/ethereum/api#Transaction](https://m3o.com/ethereum/api#Transaction)

```js
const { EthereumService } = require('m3o/ethereum');

const ethereumService = new EthereumService(process.env.M3O_API_TOKEN)

// Get transaction details by hash
async function getAethereumTransaction() {
	const rsp = await ethereumService.transaction({
  "hash": "0xbc78ab8a9e9a0bca7d0321a27b2c03addeae08ba81ea98b03cd3dd237eabed44"
})
	console.log(rsp)
	
}

getAethereumTransaction()
```
## Balance

Get the balance of an ethereum wallet


[https://m3o.com/ethereum/api#Balance](https://m3o.com/ethereum/api#Balance)

```js
const { EthereumService } = require('m3o/ethereum');

const ethereumService = new EthereumService(process.env.M3O_API_TOKEN)

// Get the balance of an ethereum wallet
async function getAethereumAddressBalance() {
	const rsp = await ethereumService.balance({
  "address": "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae"
})
	console.log(rsp)
	
}

getAethereumAddressBalance()
```
## Broadcast

Broadcast presigned transaction to ethereum network


[https://m3o.com/ethereum/api#Broadcast](https://m3o.com/ethereum/api#Broadcast)

```js
const { EthereumService } = require('m3o/ethereum');

const ethereumService = new EthereumService(process.env.M3O_API_TOKEN)

// Broadcast presigned transaction to ethereum network
async function broadcastAtransaction() {
	const rsp = await ethereumService.broadcast({
  "hex": "0xf904808000831cfde080"
})
	console.log(rsp)
	
}

broadcastAtransaction()
```
