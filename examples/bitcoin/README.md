# Bitcoin

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Bitcoin/api](https://m3o.com/Bitcoin/api).

Endpoints:

## Balance

Get the BTC balance of an address


[https://m3o.com/bitcoin/api#Balance](https://m3o.com/bitcoin/api#Balance)

```js
const { BitcoinService } = require('m3o/bitcoin');

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN)

// Get the BTC balance of an address
async function getAbitcoinAddressBalance() {
	const rsp = await bitcoinService.balance({
  "address": "1MDUoxL1bGvMxhuoDYx6i11ePytECAk9QK"
})
	console.log(rsp)
	
}

getAbitcoinAddressBalance()
```
## Lookup

Get details for a bitcoin address


[https://m3o.com/bitcoin/api#Lookup](https://m3o.com/bitcoin/api#Lookup)

```js
const { BitcoinService } = require('m3o/bitcoin');

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN)

// Get details for a bitcoin address
async function lookupTransactionsByAddress() {
	const rsp = await bitcoinService.lookup({
  "address": "1MDUoxL1bGvMxhuoDYx6i11ePytECAk9QK"
})
	console.log(rsp)
	
}

lookupTransactionsByAddress()
```
## Transaction

Get transaction details by hash


[https://m3o.com/bitcoin/api#Transaction](https://m3o.com/bitcoin/api#Transaction)

```js
const { BitcoinService } = require('m3o/bitcoin');

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN)

// Get transaction details by hash
async function getAbitcoinTransaction() {
	const rsp = await bitcoinService.transaction({
  "hash": "f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449"
})
	console.log(rsp)
	
}

getAbitcoinTransaction()
```
## Price

Get the price of bitcoin


[https://m3o.com/bitcoin/api#Price](https://m3o.com/bitcoin/api#Price)

```js
const { BitcoinService } = require('m3o/bitcoin');

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN)

// Get the price of bitcoin
async function getBitcoinPrice() {
	const rsp = await bitcoinService.price({
  "symbol": "USD"
})
	console.log(rsp)
	
}

getBitcoinPrice()
```
