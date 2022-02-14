# Minecraft

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Minecraft/api](https://m3o.com/Minecraft/api).

Endpoints:

## Ping

Ping a minecraft server


[https://m3o.com/minecraft/api#Ping](https://m3o.com/minecraft/api#Ping)

```js
const { MinecraftService } = require('m3o/minecraft');

const minecraftService = new MinecraftService(process.env.M3O_API_TOKEN)

// Ping a minecraft server
async function pingAminecraftServer() {
	const rsp = await minecraftService.ping({
  "address": "funcraft.net"
})
	console.log(rsp)
	
}

pingAminecraftServer()
```
