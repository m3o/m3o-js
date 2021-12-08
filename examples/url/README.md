# Url

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Url/api](https://m3o.com/Url/api).

Endpoints:

## Shorten

Shortens a destination URL and returns a full short URL.


[https://m3o.com/url/api#Shorten](https://m3o.com/url/api#Shorten)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Shortens a destination URL and returns a full short URL.
async function shortenAlongUrl() {
	const rsp = await urlService.shorten({
  "destinationURL": "https://mysite.com/this-is-a-rather-long-web-address"
})
	console.log(rsp)
	
}

shortenAlongUrl()
```
## Proxy

Proxy returns the destination URL of a short URL.


[https://m3o.com/url/api#Proxy](https://m3o.com/url/api#Proxy)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Proxy returns the destination URL of a short URL.
async function resolveAshortUrlToAlongDestinationUrl() {
	const rsp = await urlService.proxy({
  "shortURL": "https://m3o.one/u/ck6SGVkYp"
})
	console.log(rsp)
	
}

resolveAshortUrlToAlongDestinationUrl()
```
## List

List information on all the shortened URLs that you have created


[https://m3o.com/url/api#List](https://m3o.com/url/api#List)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// List information on all the shortened URLs that you have created
async function listYourShortenedUrls() {
	const rsp = await urlService.list({})
	console.log(rsp)
	
}

listYourShortenedUrls()
```
