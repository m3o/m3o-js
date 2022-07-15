# Bitcoin

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Bitcoin/api](https://m3o.com/Bitcoin/api).

Endpoints:

## Price

Get the price of bitcoin


[https://m3o.com/bitcoin/api#Price](https://m3o.com/bitcoin/api#Price)

```js
const { BitcoinService } = require('m3o/bitcoin');

const bitcoinService = new BitcoinService(process.env.M3O_API_TOKEN)

// Get the price of bitcoin
async function getBitcoinPrice() {
	const rsp = await bitcoinService.price({
  "symbol": "BTCUSD"
})
	console.log(rsp)
	
}

getBitcoinPrice()
```
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
