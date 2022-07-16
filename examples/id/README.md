# Id

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Id/api](https://m3o.com/Id/api).

Endpoints:

## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAnUniversallyUniqueId() {
	const rsp = await idService.generate({
  "type": "uuid"
})
	console.log(rsp)
	
}

generateAnUniversallyUniqueId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAnUniqueLexicographicallyId() {
	const rsp = await idService.generate({
  "type": "ulid"
})
	console.log(rsp)
	
}

generateAnUniqueLexicographicallyId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAnUniqueKsortableId() {
	const rsp = await idService.generate({
  "type": "ksuid"
})
	console.log(rsp)
	
}

generateAnUniqueKsortableId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAwebOrientedGloballyUniqueId() {
	const rsp = await idService.generate({
  "type": "xid"
})
	console.log(rsp)
	
}

generateAwebOrientedGloballyUniqueId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAurlFriendlyUniqueId() {
	const rsp = await idService.generate({
  "type": "nanoid"
})
	console.log(rsp)
	
}

generateAurlFriendlyUniqueId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAshortId() {
	const rsp = await idService.generate({
  "type": "shortid"
})
	console.log(rsp)
	
}

generateAshortId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAsnowflakeId() {
	const rsp = await idService.generate({
  "type": "snowflake"
})
	console.log(rsp)
	
}

generateAsnowflakeId()
```
## Generate

Generate a unique ID. Defaults to uuid.


[https://m3o.com/id/api#Generate](https://m3o.com/id/api#Generate)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// Generate a unique ID. Defaults to uuid.
async function generateAbigflakeId() {
	const rsp = await idService.generate({
  "type": "bigflake"
})
	console.log(rsp)
	
}

generateAbigflakeId()
```
## Types

List the types of IDs available.


[https://m3o.com/id/api#Types](https://m3o.com/id/api#Types)

```js
const { IdService } = require('m3o/id');

const idService = new IdService(process.env.M3O_API_TOKEN)

// List the types of IDs available.
async function listTheTypesOfIdsAvailable() {
	const rsp = await idService.types({})
	console.log(rsp)
	
}

listTheTypesOfIdsAvailable()
```
