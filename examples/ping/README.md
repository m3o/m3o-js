# Ping

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ping/api](https://m3o.com/Ping/api).

Endpoints:

## Ip

Ping an IP address


[https://m3o.com/ping/api#Ip](https://m3o.com/ping/api#Ip)

```js
const { PingService } = require('m3o/ping');

const pingService = new PingService(process.env.M3O_API_TOKEN)

// Ping an IP address
async function pingAnIp() {
	const rsp = await pingService.ip({
  "address": "google.com"
})
	console.log(rsp)
	
}

pingAnIp()
```
## Tcp

Ping a TCP port is open


[https://m3o.com/ping/api#Tcp](https://m3o.com/ping/api#Tcp)

```js
const { PingService } = require('m3o/ping');

const pingService = new PingService(process.env.M3O_API_TOKEN)

// Ping a TCP port is open
async function dialAtcpAddress() {
	const rsp = await pingService.tcp({
  "address": "google.com:80"
})
	console.log(rsp)
	
}

dialAtcpAddress()
```
## Url

Ping a HTTP URL


[https://m3o.com/ping/api#Url](https://m3o.com/ping/api#Url)

```js
const { PingService } = require('m3o/ping');

const pingService = new PingService(process.env.M3O_API_TOKEN)

// Ping a HTTP URL
async function checkAurl() {
	const rsp = await pingService.url({
  "address": "google.com"
})
	console.log(rsp)
	
}

checkAurl()
```
