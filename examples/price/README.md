# Price

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Price/api](https://m3o.com/Price/api).

Endpoints:

## Add

Add a price


[https://m3o.com/price/api#Add](https://m3o.com/price/api#Add)

```js
const { PriceService } = require('m3o/price');

const priceService = new PriceService(process.env.M3O_API_TOKEN)

// Add a price
async function addAprice() {
	const rsp = await priceService.add({
  "currency": "USD",
  "name": "bitcoin",
  "price": 39037.97
})
	console.log(rsp)
	
}

addAprice()
```
## Get

Get the price of anything


[https://m3o.com/price/api#Get](https://m3o.com/price/api#Get)

```js
const { PriceService } = require('m3o/price');

const priceService = new PriceService(process.env.M3O_API_TOKEN)

// Get the price of anything
async function getThePrice() {
	const rsp = await priceService.get({
  "currency": "USD",
  "name": "bitcoin"
})
	console.log(rsp)
	
}

getThePrice()
```
## List

List prices for a given currency


[https://m3o.com/price/api#List](https://m3o.com/price/api#List)

```js
const { PriceService } = require('m3o/price');

const priceService = new PriceService(process.env.M3O_API_TOKEN)

// List prices for a given currency
async function listPrices() {
	const rsp = await priceService.list({
  "currency": "GBP"
})
	console.log(rsp)
	
}

listPrices()
```
## Index

Get the index for available prices


[https://m3o.com/price/api#Index](https://m3o.com/price/api#Index)

```js
const { PriceService } = require('m3o/price');

const priceService = new PriceService(process.env.M3O_API_TOKEN)

// Get the index for available prices
async function getTheIndex() {
	const rsp = await priceService.index({})
	console.log(rsp)
	
}

getTheIndex()
```
## Report

Report an invalid price


[https://m3o.com/price/api#Report](https://m3o.com/price/api#Report)

```js
const { PriceService } = require('m3o/price');

const priceService = new PriceService(process.env.M3O_API_TOKEN)

// Report an invalid price
async function reportAprice() {
	const rsp = await priceService.report({
  "comment": "Price is not up to date",
  "name": "bitcoin",
  "symbol": "BTC"
})
	console.log(rsp)
	
}

reportAprice()
```
