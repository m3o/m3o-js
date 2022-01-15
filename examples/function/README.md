# Function

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Function/api](https://m3o.com/Function/api).

Endpoints:

## Proxy

Return the backend url for proxying


[https://m3o.com/function/api#Proxy](https://m3o.com/function/api#Proxy)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Return the backend url for proxying
async function proxyUrl() {
	const rsp = await functionService.proxy({
  "id": "helloworld"
})
	console.log(rsp)
	
}

proxyUrl()
```
## Update

Update a function. Downloads the source, builds and redeploys


[https://m3o.com/function/api#Update](https://m3o.com/function/api#Update)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Update a function. Downloads the source, builds and redeploys
async function updateAfunction() {
	const rsp = await functionService.update({
  "name": "helloworld"
})
	console.log(rsp)
	
}

updateAfunction()
```
## Delete

Delete a function by name


[https://m3o.com/function/api#Delete](https://m3o.com/function/api#Delete)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Delete a function by name
async function deleteAfunction() {
	const rsp = await functionService.delete({
  "name": "helloworld"
})
	console.log(rsp)
	
}

deleteAfunction()
```
## Describe

Get the info for a deployed function


[https://m3o.com/function/api#Describe](https://m3o.com/function/api#Describe)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Get the info for a deployed function
async function describeFunctionStatus() {
	const rsp = await functionService.describe({
  "name": "helloworld"
})
	console.log(rsp)
	
}

describeFunctionStatus()
```
## Regions

Return a list of supported regions


[https://m3o.com/function/api#Regions](https://m3o.com/function/api#Regions)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Return a list of supported regions
async function listRegions() {
	const rsp = await functionService.regions({})
	console.log(rsp)
	
}

listRegions()
```
## Reserve

Reserve function names and resources beyond free quota


[https://m3o.com/function/api#Reserve](https://m3o.com/function/api#Reserve)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Reserve function names and resources beyond free quota
async function reserveAfunction() {
	const rsp = await functionService.reserve({
  "name": "helloworld"
})
	console.log(rsp)
	
}

reserveAfunction()
```
## Deploy

Deploy a group of functions


[https://m3o.com/function/api#Deploy](https://m3o.com/function/api#Deploy)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Deploy a group of functions
async function deployAfunction() {
	const rsp = await functionService.deploy({
  "branch": "main",
  "entrypoint": "Helloworld",
  "name": "helloworld",
  "region": "europe-west1",
  "repo": "https://github.com/m3o/m3o",
  "runtime": "go116",
  "subfolder": "examples/go-function"
})
	console.log(rsp)
	
}

deployAfunction()
```
## Call

Call a function by name


[https://m3o.com/function/api#Call](https://m3o.com/function/api#Call)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Call a function by name
async function callAfunction() {
	const rsp = await functionService.call({
  "name": "helloworld",
  "request": {
    "name": "Alice"
  }
})
	console.log(rsp)
	
}

callAfunction()
```
## List

List all the deployed functions


[https://m3o.com/function/api#List](https://m3o.com/function/api#List)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// List all the deployed functions
async function listFunctions() {
	const rsp = await functionService.list({})
	console.log(rsp)
	
}

listFunctions()
```
