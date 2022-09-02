# Url

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Url/api](https://m3o.com/Url/api).

Endpoints:

## Resolve

Resolve returns the destination URL of a short URL.


[https://m3o.com/url/api#Resolve](https://m3o.com/url/api#Resolve)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Resolve returns the destination URL of a short URL.
async function resolveAshortUrlToAlongDestinationUrl() {
	const rsp = await urlService.resolve({
  "shortURL": "https://m3o.one/u/ck6SGVkYp"
})
	console.log(rsp)
	
}

resolveAshortUrlToAlongDestinationUrl()
```
## Delete

Delete a URL


[https://m3o.com/url/api#Delete](https://m3o.com/url/api#Delete)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Delete a URL
async function deleteAshortenedUrl() {
	const rsp = await urlService.delete({
  "shortURL": "https://m3o.one/u/f8f3f83f3f83g"
})
	console.log(rsp)
	
}

deleteAshortenedUrl()
```
## Create

Create a URL


[https://m3o.com/url/api#Create](https://m3o.com/url/api#Create)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Create a URL
async function createAurl() {
	const rsp = await urlService.create({
  "destinationURL": "https://mysite.com/this-is-a-rather-long-web-address",
  "id": "my-site"
})
	console.log(rsp)
	
}

createAurl()
```
## List

List all the shortened URLs


[https://m3o.com/url/api#List](https://m3o.com/url/api#List)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// List all the shortened URLs
async function listYourShortenedUrls() {
	const rsp = await urlService.list({})
	console.log(rsp)
	
}

listYourShortenedUrls()
```
## Update

Update the destination for a short URL


[https://m3o.com/url/api#Update](https://m3o.com/url/api#Update)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Update the destination for a short URL
async function updateAshortUrl() {
	const rsp = await urlService.update({
  "destinationURL": "https://mynewsite.com/this-is-a-rather-long-web-address",
  "shortURL": "https://m3o.one/u/f8f3f83f3f83g"
})
	console.log(rsp)
	
}

updateAshortUrl()
```
## Shorten

Shorten a URL


[https://m3o.com/url/api#Shorten](https://m3o.com/url/api#Shorten)

```js
const { UrlService } = require('m3o/url');

const urlService = new UrlService(process.env.M3O_API_TOKEN)

// Shorten a URL
async function shortenAlongUrl() {
	const rsp = await urlService.shorten({
  "destinationURL": "https://mysite.com/this-is-a-rather-long-web-address"
})
	console.log(rsp)
	
}

shortenAlongUrl()
```
