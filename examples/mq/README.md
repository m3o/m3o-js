# Mq

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Mq/api](https://m3o.com/Mq/api).

Endpoints:

## Publish

Publish a message. Specify a topic to group messages for a specific topic.


[https://m3o.com/mq/api#Publish](https://m3o.com/mq/api#Publish)

```js
const { MqService } = require('m3o/mq');

const mqService = new MqService(process.env.M3O_API_TOKEN)

// Publish a message. Specify a topic to group messages for a specific topic.
async function publishAmessage() {
	const rsp = await mqService.publish({
  "message": {
    "id": "1",
    "type": "signup",
    "user": "john"
  },
  "topic": "events"
})
	console.log(rsp)
	
}

publishAmessage()
```
## Subscribe

Subscribe to messages for a given topic.


[https://m3o.com/mq/api#Subscribe](https://m3o.com/mq/api#Subscribe)

```js
const { MqService } = require('m3o/mq');

const mqService = new MqService(process.env.M3O_API_TOKEN)

// Subscribe to messages for a given topic.
async function subscribeToAtopic() {
	const rsp = await mqService.subscribe({
  "topic": "events"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

subscribeToAtopic()
```
