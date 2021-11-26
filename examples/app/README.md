# App

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/App/api](https://m3o.com/App/api).

Endpoints:

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
