# Time

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Time/api](https://m3o.com/Time/api).

Endpoints:

## Now

Get the current time


[https://m3o.com/time/api#Now](https://m3o.com/time/api#Now)

```js
const { TimeService } = require('m3o/time');

const timeService = new TimeService(process.env.M3O_API_TOKEN)

// Get the current time
async function returnsCurrentUtcTime() {
	const rsp = await timeService.now({})
	console.log(rsp)
	
}

returnsCurrentUtcTime()
```
## Now

Get the current time


[https://m3o.com/time/api#Now](https://m3o.com/time/api#Now)

```js
const { TimeService } = require('m3o/time');

const timeService = new TimeService(process.env.M3O_API_TOKEN)

// Get the current time
async function returnsCurrentTimeForGivenLocation() {
	const rsp = await timeService.now({
  "location": "London"
})
	console.log(rsp)
	
}

returnsCurrentTimeForGivenLocation()
```
## Zone

Get the timezone info for a specific location


[https://m3o.com/time/api#Zone](https://m3o.com/time/api#Zone)

```js
const { TimeService } = require('m3o/time');

const timeService = new TimeService(process.env.M3O_API_TOKEN)

// Get the timezone info for a specific location
async function getTheTimezoneInfoForAspecificLocation() {
	const rsp = await timeService.zone({
  "location": "London"
})
	console.log(rsp)
	
}

getTheTimezoneInfoForAspecificLocation()
```
