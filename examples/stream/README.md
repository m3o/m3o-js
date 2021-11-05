# Stream

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Stream/api](https://m3o.com/Stream/api).

Endpoints:

## CreateChannel

Create a channel with a given name and description. Channels are created automatically but
this allows you to specify a description that's persisted for the lifetime of the channel.


[https://m3o.com/stream/api#CreateChannel](https://m3o.com/stream/api#CreateChannel)

```js
const { StreamService } = require('m3o/stream');

// Create a channel with a given name and description. Channels are created automatically but
// this allows you to specify a description that's persisted for the lifetime of the channel.
async function createChannel() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.createChannel({
  "description": "The channel for all things",
  "name": "general"
})
	console.log(rsp)
}

createChannel()
```
## SendMessage

Send a message to the stream.


[https://m3o.com/stream/api#SendMessage](https://m3o.com/stream/api#SendMessage)

```js
const { StreamService } = require('m3o/stream');

// Send a message to the stream.
async function sendMessage() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.sendMessage({
  "channel": "general",
  "text": "Hey checkout this tweet https://twitter.com/m3oservices/status/1455291054295498752"
})
	console.log(rsp)
}

sendMessage()
```
## ListMessages

List messages for a given channel


[https://m3o.com/stream/api#ListMessages](https://m3o.com/stream/api#ListMessages)

```js
const { StreamService } = require('m3o/stream');

// List messages for a given channel
async function listMessages() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.listMessages({
  "channel": "general"
})
	console.log(rsp)
}

listMessages()
```
## ListChannels

List all the active channels


[https://m3o.com/stream/api#ListChannels](https://m3o.com/stream/api#ListChannels)

```js
const { StreamService } = require('m3o/stream');

// List all the active channels
async function listChannels() {
	let streamService = new StreamService(process.env.M3O_API_TOKEN)
	let rsp = await streamService.listChannels({})
	console.log(rsp)
}

listChannels()
```
