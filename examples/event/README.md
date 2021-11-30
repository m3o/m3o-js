# Event

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Event/api](https://m3o.com/Event/api).

Endpoints:

## Publish

Publish a event to the event stream.


[https://m3o.com/event/api#Publish](https://m3o.com/event/api#Publish)

```js
const { EventService } = require('m3o/event');

const eventService = new EventService(process.env.M3O_API_TOKEN)

// Publish a event to the event stream.
async function publishAnEvent() {
	const rsp = await eventService.publish({
  "message": {
    "id": "1",
    "type": "signup",
    "user": "john"
  },
  "topic": "user"
})
	console.log(rsp)
	
}

publishAnEvent()
```
## Consume

Consume events from a given topic.


[https://m3o.com/event/api#Consume](https://m3o.com/event/api#Consume)

```js
const { EventService } = require('m3o/event');

const eventService = new EventService(process.env.M3O_API_TOKEN)

// Consume events from a given topic.
async function consumeFromAtopic() {
	const rsp = await eventService.consume({
  "topic": "user"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

consumeFromAtopic()
```
## Read

Read stored events


[https://m3o.com/event/api#Read](https://m3o.com/event/api#Read)

```js
const { EventService } = require('m3o/event');

const eventService = new EventService(process.env.M3O_API_TOKEN)

// Read stored events
async function readEventsOnAtopic() {
	const rsp = await eventService.read({
  "topic": "user"
})
	console.log(rsp)
	
}

readEventsOnAtopic()
```
