# Analytics

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Analytics/api](https://m3o.com/Analytics/api).

Endpoints:

## Track

Track an event, it will be created if it doesn't exist


[https://m3o.com/analytics/api#Track](https://m3o.com/analytics/api#Track)

```js
const { AnalyticsService } = require('m3o/analytics');

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN)

// Track an event, it will be created if it doesn't exist
async function trackAnEvent() {
	const rsp = await analyticsService.track({
  "name": "click"
})
	console.log(rsp)
	
}

trackAnEvent()
```
## Read

Get a single event


[https://m3o.com/analytics/api#Read](https://m3o.com/analytics/api#Read)

```js
const { AnalyticsService } = require('m3o/analytics');

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN)

// Get a single event
async function readAnEvent() {
	const rsp = await analyticsService.read({
  "name": "click"
})
	console.log(rsp)
	
}

readAnEvent()
```
## List

List all events


[https://m3o.com/analytics/api#List](https://m3o.com/analytics/api#List)

```js
const { AnalyticsService } = require('m3o/analytics');

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN)

// List all events
async function listAllEvents() {
	const rsp = await analyticsService.list({})
	console.log(rsp)
	
}

listAllEvents()
```
## Delete

Delete an event


[https://m3o.com/analytics/api#Delete](https://m3o.com/analytics/api#Delete)

```js
const { AnalyticsService } = require('m3o/analytics');

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN)

// Delete an event
async function deleteAnEvent() {
	const rsp = await analyticsService.delete({
  "name": "click"
})
	console.log(rsp)
	
}

deleteAnEvent()
```
