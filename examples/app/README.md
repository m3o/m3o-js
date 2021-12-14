# App

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/App/api](https://m3o.com/App/api).

Endpoints:

## Vote

Vote to have the App api launched faster!


[https://m3o.com/app/api#Vote](https://m3o.com/app/api#Vote)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Vote to have the App api launched faster!
async function voteForTheApi() {
	const rsp = await appService.vote({
  "message": "Launch it!"
})
	console.log(rsp)
	
}

voteForTheApi()
```
## Reserve

Reserve your app name


[https://m3o.com/app/api#Reserve](https://m3o.com/app/api#Reserve)

```js
const { AppService } = require('m3o/app');

const appService = new AppService(process.env.M3O_API_TOKEN)

// Reserve your app name
async function reserveAppName() {
	const rsp = await appService.reserve({
  "name": "helloworld"
})
	console.log(rsp)
	
}

reserveAppName()
```
