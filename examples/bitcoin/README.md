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
