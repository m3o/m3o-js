# Tunnel

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Tunnel/api](https://m3o.com/Tunnel/api).

Endpoints:

## Send

Send a request through the tunnel


[https://m3o.com/tunnel/api#Send](https://m3o.com/tunnel/api#Send)

```js
const { TunnelService } = require('m3o/tunnel');

const tunnelService = new TunnelService(process.env.M3O_API_TOKEN)

// Send a request through the tunnel
async function sendArequest() {
	const rsp = await tunnelService.send({
  "url": "https://google.com"
})
	console.log(rsp)
	
}

sendArequest()
```
