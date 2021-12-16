# Postcode

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Postcode/api](https://m3o.com/Postcode/api).

Endpoints:

## Lookup

Lookup a postcode to retrieve the related region, county, etc


[https://m3o.com/postcode/api#Lookup](https://m3o.com/postcode/api#Lookup)

```js
const { PostcodeService } = require('m3o/postcode');

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN)

// Lookup a postcode to retrieve the related region, county, etc
async function lookupPostcode() {
	const rsp = await postcodeService.lookup({
  "postcode": "SW1A 2AA"
})
	console.log(rsp)
	
}

lookupPostcode()
```
## Random

Return a random postcode and its related info


[https://m3o.com/postcode/api#Random](https://m3o.com/postcode/api#Random)

```js
const { PostcodeService } = require('m3o/postcode');

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN)

// Return a random postcode and its related info
async function returnArandomPostcodeAndItsInformation() {
	const rsp = await postcodeService.random({})
	console.log(rsp)
	
}

returnArandomPostcodeAndItsInformation()
```
## Validate

Validate a postcode.


[https://m3o.com/postcode/api#Validate](https://m3o.com/postcode/api#Validate)

```js
const { PostcodeService } = require('m3o/postcode');

const postcodeService = new PostcodeService(process.env.M3O_API_TOKEN)

// Validate a postcode.
async function returnArandomPostcodeAndItsInformation() {
	const rsp = await postcodeService.validate({
  "postcode": "SW1A 2AA"
})
	console.log(rsp)
	
}

returnArandomPostcodeAndItsInformation()
```
