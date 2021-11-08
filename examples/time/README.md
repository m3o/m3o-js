# Time

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Time/api](https://m3o.com/Time/api).

Endpoints:

## Now

Get the current time


[https://m3o.com/time/api#Now](https://m3o.com/time/api#Now)

```js
const { TimeService } = require('m3o/time');

// Get the current time
async function returnsCurrentTimeOptionallyWithLocation() {
	let timeService = new TimeService(process.env.M3O_API_TOKEN)
	let rsp = await timeService.now({})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

returnsCurrentTimeOptionallyWithLocation()
```
## Zone

Get the timezone info for a specific location


[https://m3o.com/time/api#Zone](https://m3o.com/time/api#Zone)

```js
const { TimeService } = require('m3o/time');

// Get the timezone info for a specific location
async function getTheTimezoneInfoForAspecificLocation() {
	let timeService = new TimeService(process.env.M3O_API_TOKEN)
	let rsp = await timeService.zone({
  "location": "London"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

getTheTimezoneInfoForAspecificLocation()
```
