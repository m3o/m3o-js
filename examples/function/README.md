# Function

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Function/api](https://m3o.com/Function/api).

Endpoints:

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
  "request": {}
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
## Deploy

Deploy a group of functions


[https://m3o.com/function/api#Deploy](https://m3o.com/function/api#Deploy)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// Deploy a group of functions
async function deployAfunction() {
	const rsp = await functionService.deploy({
  "entrypoint": "helloworld",
  "name": "helloworld",
  "repo": "github.com/m3o/nodejs-function-example",
  "runtime": "nodejs14"
})
	console.log(rsp)
	
}

deployAfunction()
```
## Update




[https://m3o.com/function/api#Update](https://m3o.com/function/api#Update)

```js
const { FunctionService } = require('m3o/function');

const functionService = new FunctionService(process.env.M3O_API_TOKEN)

// 
async function updateAfunction() {
	const rsp = await functionService.update({
  "entrypoint": "helloworld",
  "name": "helloworld",
  "repo": "github.com/m3o/nodejs-function-example",
  "runtime": "nodejs14"
})
	console.log(rsp)
	
}

updateAfunction()
```
