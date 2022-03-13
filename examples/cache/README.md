# Cache

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Cache/api](https://m3o.com/Cache/api).

Endpoints:

## Increment

Increment a value (if it's a number). If key not found it is equivalent to set.


[https://m3o.com/cache/api#Increment](https://m3o.com/cache/api#Increment)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// Increment a value (if it's a number). If key not found it is equivalent to set.
async function incrementAvalue() {
	const rsp = await cacheService.increment({
  "key": "counter",
  "value": 2
})
	console.log(rsp)
	
}

incrementAvalue()
```
## Decrement

Decrement a value (if it's a number). If key not found it is equivalent to set.


[https://m3o.com/cache/api#Decrement](https://m3o.com/cache/api#Decrement)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// Decrement a value (if it's a number). If key not found it is equivalent to set.
async function decrementAvalue() {
	const rsp = await cacheService.decrement({
  "key": "counter",
  "value": 2
})
	console.log(rsp)
	
}

decrementAvalue()
```
## ListKeys

List all the available keys


[https://m3o.com/cache/api#ListKeys](https://m3o.com/cache/api#ListKeys)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// List all the available keys
async function listTheKeys() {
	const rsp = await cacheService.listKeys({})
	console.log(rsp)
	
}

listTheKeys()
```
## Set

Set an item in the cache. Overwrites any existing value already set.


[https://m3o.com/cache/api#Set](https://m3o.com/cache/api#Set)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// Set an item in the cache. Overwrites any existing value already set.
async function setAvalue() {
	const rsp = await cacheService.set({
  "key": "foo",
  "value": "bar"
})
	console.log(rsp)
	
}

setAvalue()
```
## Get

Get an item from the cache by key. If key is not found, an empty response is returned.


[https://m3o.com/cache/api#Get](https://m3o.com/cache/api#Get)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// Get an item from the cache by key. If key is not found, an empty response is returned.
async function getAvalue() {
	const rsp = await cacheService.get({
  "key": "foo"
})
	console.log(rsp)
	
}

getAvalue()
```
## Delete

Delete a value from the cache. If key not found a success response is returned.


[https://m3o.com/cache/api#Delete](https://m3o.com/cache/api#Delete)

```js
const { CacheService } = require('m3o/cache');

const cacheService = new CacheService(process.env.M3O_API_TOKEN)

// Delete a value from the cache. If key not found a success response is returned.
async function deleteAvalue() {
	const rsp = await cacheService.delete({
  "key": "foo"
})
	console.log(rsp)
	
}

deleteAvalue()
```
