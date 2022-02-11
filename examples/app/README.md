# App

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/App/api](https://m3o.com/App/api).

Endpoints:

## Resolve

Resolve an app by id to its raw backend endpoint


[https://m3o.com/app/api#Resolve](https://m3o.com/app/api#Resolve)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Resolve an app by id to its raw backend endpoint
async function resolveAppById() {
	const rsp = await appService.resolve({
  "id": "helloworld"
})
	console.log(rsp)
	
}

resolveAppById()
```
## Update

Update the app. The latest source code will be downloaded, built and deployed.


[https://m3o.com/app/api#Update](https://m3o.com/app/api#Update)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Update the app. The latest source code will be downloaded, built and deployed.
async function updateAnApp() {
	const rsp = await appService.update({
  "name": "helloworld"
})
	console.log(rsp)
	
}

updateAnApp()
```
## Delete

Delete an app


[https://m3o.com/app/api#Delete](https://m3o.com/app/api#Delete)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Delete an app
async function deleteAnApp() {
	const rsp = await appService.delete({
  "name": "helloworld"
})
	console.log(rsp)
	
}

deleteAnApp()
```
## Reserve

Reserve apps beyond the free quota. Call Run after.


[https://m3o.com/app/api#Reserve](https://m3o.com/app/api#Reserve)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Reserve apps beyond the free quota. Call Run after.
async function reserveAppName() {
	const rsp = await appService.reserve({
  "name": "helloworld"
})
	console.log(rsp)
	
}

reserveAppName()
```
## List

List all the apps


[https://m3o.com/app/api#List](https://m3o.com/app/api#List)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// List all the apps
async function listTheApps() {
	const rsp = await appService.list({})
	console.log(rsp)
	
}

listTheApps()
```
## Run

Run an app from a source repo. Specify region etc.


[https://m3o.com/app/api#Run](https://m3o.com/app/api#Run)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Run an app from a source repo. Specify region etc.
async function runAnApp() {
	const rsp = await appService.run({
  "branch": "master",
  "name": "helloworld",
  "port": 8080,
  "region": "europe-west1",
  "repo": "github.com/asim/helloworld"
})
	console.log(rsp)
	
}

runAnApp()
```
## Regions

Return the support regions


[https://m3o.com/app/api#Regions](https://m3o.com/app/api#Regions)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Return the support regions
async function listRegions() {
	const rsp = await appService.regions({})
	console.log(rsp)
	
}

listRegions()
```
## Status

Get the status of an app


[https://m3o.com/app/api#Status](https://m3o.com/app/api#Status)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Get the status of an app
async function getTheStatusOfAnApp() {
	const rsp = await appService.status({
  "name": "helloworld"
})
	console.log(rsp)
	
}

getTheStatusOfAnApp()
```
