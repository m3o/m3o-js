# Stock

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Stock/api](https://m3o.com/Stock/api).

Endpoints:

## Quote

Get the last quote for the stock


[https://m3o.com/stock/api#Quote](https://m3o.com/stock/api#Quote)

```js
const { StockService } = require('m3o/stock');

const stockService = new StockService(process.env.M3O_API_TOKEN)

// Get the last quote for the stock
async function getAstockQuote() {
	const rsp = await stockService.quote({
  "symbol": "AAPL"
})
	console.log(rsp)
	
}

getAstockQuote()
```
## History

Get the historic open-close for a given day


[https://m3o.com/stock/api#History](https://m3o.com/stock/api#History)

```js
const { StockService } = require('m3o/stock');

const stockService = new StockService(process.env.M3O_API_TOKEN)

// Get the historic open-close for a given day
async function getHistoricData() {
	const rsp = await stockService.history({
  "date": "2020-10-01",
  "stock": "AAPL"
})
	console.log(rsp)
	
}

getHistoricData()
```
## Price

Get the last price for a given stock ticker


[https://m3o.com/stock/api#Price](https://m3o.com/stock/api#Price)

```js
const { StockService } = require('m3o/stock');

const stockService = new StockService(process.env.M3O_API_TOKEN)

// Get the last price for a given stock ticker
async function getAstockPrice() {
	const rsp = await stockService.price({
  "symbol": "AAPL"
})
	console.log(rsp)
	
}

getAstockPrice()
```
