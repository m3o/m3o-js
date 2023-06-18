# Secret

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Secret/api](https://m3o.com/Secret/api).

Endpoints:

## Delete

Delete a secret. If key not found a success response is returned.


[https://m3o.com/secret/api#Delete](https://m3o.com/secret/api#Delete)

```js
const { SecretService } = require('m3o/secret');

const secretService = new SecretService(process.env.M3O_API_TOKEN)

// Delete a secret. If key not found a success response is returned.
async function deleteAvalue() {
	const rsp = await secretService.delete({
  "key": "foo"
})
	console.log(rsp)
	
}

deleteAvalue()
```
## List

List all the available secrets


[https://m3o.com/secret/api#List](https://m3o.com/secret/api#List)

```js
const { SecretService } = require('m3o/secret');

const secretService = new SecretService(process.env.M3O_API_TOKEN)

// List all the available secrets
async function listAllSecrets() {
	const rsp = await secretService.list({})
	console.log(rsp)
	
}

listAllSecrets()
```
## Set

Set a secret. Overwrites any existing value already set.


[https://m3o.com/secret/api#Set](https://m3o.com/secret/api#Set)

```js
const { SecretService } = require('m3o/secret');

const secretService = new SecretService(process.env.M3O_API_TOKEN)

// Set a secret. Overwrites any existing value already set.
async function setAvalue() {
	const rsp = await secretService.set({
  "key": "foo",
  "value": "bar"
})
	console.log(rsp)
	
}

setAvalue()
```
## Get

Get a secret by key.


[https://m3o.com/secret/api#Get](https://m3o.com/secret/api#Get)

```js
const { SecretService } = require('m3o/secret');

const secretService = new SecretService(process.env.M3O_API_TOKEN)

// Get a secret by key.
async function getAvalue() {
	const rsp = await secretService.get({
  "key": "foo"
})
	console.log(rsp)
	
}

getAvalue()
```
