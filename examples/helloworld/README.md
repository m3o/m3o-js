# Helloworld

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Helloworld/api](https://m3o.com/Helloworld/api).

Endpoints:

## Call

Return a personalised Hello message


[https://m3o.com/helloworld/api#Call](https://m3o.com/helloworld/api#Call)

```js
const { HelloworldService } = require('m3o/helloworld');

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN)

// Return a personalised Hello message
async function callHelloworld() {
	const rsp = await helloworldService.call({
  "name": "John"
})
	console.log(rsp)
	
}

callHelloworld()
```
## Stream

Stream a personalised Hello message


[https://m3o.com/helloworld/api#Stream](https://m3o.com/helloworld/api#Stream)

```js
const { HelloworldService } = require('m3o/helloworld');

const helloworldService = new HelloworldService(process.env.M3O_API_TOKEN)

// Stream a personalised Hello message
async function streamHelloworld() {
	const rsp = await helloworldService.stream({
  "messages": 10,
  "name": "John"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

streamHelloworld()
```
