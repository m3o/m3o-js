# Image

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Image/api](https://m3o.com/Image/api).

Endpoints:

## Convert

Convert an image from one format (jpeg, png etc.) to an other either on the fly (from base64 to base64),
or by uploading the conversion result.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Convert](https://m3o.com/image/api#Convert)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Convert an image from one format (jpeg, png etc.) to an other either on the fly (from base64 to base64),
// or by uploading the conversion result.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function convertApngImageToAjpegTakenFromAurlAndSavedToAurlOnMicrosCdn() {
	const rsp = await imageService.convert({
  "name": "cat.jpeg",
  "outputURL": true,
  "url": "somewebsite.com/cat.png"
})
	console.log(rsp)
	
}

convertApngImageToAjpegTakenFromAurlAndSavedToAurlOnMicrosCdn()
```
## Upload

Upload an image by either sending a base64 encoded image to this endpoint or a URL.
To resize an image before uploading, see the Resize endpoint.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Upload](https://m3o.com/image/api#Upload)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Upload an image by either sending a base64 encoded image to this endpoint or a URL.
// To resize an image before uploading, see the Resize endpoint.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function uploadAbase64imageToMicrosCdn() {
	const rsp = await imageService.upload({
  "base64": "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAx0lEQVR4nOzaMaoDMQyE4ZHj+x82vVdhwQoTkzKQEcwP5r0ihT7sbjUTeAJ4HCegXQJYfOYefOyjDuBiz3yjwJBoCIl6QZOeUjTC1Ix1IxEJXF9+0KWsf2bD4bn37OO/c/wuQ9QyRC1D1DJELUPUMkQtQ9QyRC1D1DJELUPUMkQtQ9QyRC1D1DJELUPUMkQtQ9Sa/NG94Tf3j4WBdaxudMEkn4IM2rZBA0wBrvo7aOcpj2emXvLeVt0IGm0GVXUj91mvAAAA//+V2CZl+4AKXwAAAABJRU5ErkJggg==",
  "name": "cat.jpeg"
})
	console.log(rsp)
	
}

uploadAbase64imageToMicrosCdn()
```
## Upload

Upload an image by either sending a base64 encoded image to this endpoint or a URL.
To resize an image before uploading, see the Resize endpoint.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Upload](https://m3o.com/image/api#Upload)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Upload an image by either sending a base64 encoded image to this endpoint or a URL.
// To resize an image before uploading, see the Resize endpoint.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function uploadAnImageFromAurlToMicrosCdn() {
	const rsp = await imageService.upload({
  "name": "cat.jpeg",
  "url": "somewebsite.com/cat.png"
})
	console.log(rsp)
	
}

uploadAnImageFromAurlToMicrosCdn()
```
## Delete

Delete an image previously uploaded.


[https://m3o.com/image/api#Delete](https://m3o.com/image/api#Delete)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Delete an image previously uploaded.
async function deleteAnUploadedImage() {
	const rsp = await imageService.delete({
  "url": "https://cdn.m3ocontent.com/micro/images/micro/41e23b39-48dd-42b6-9738-79a313414bb8/cat.png"
})
	console.log(rsp)
	
}

deleteAnUploadedImage()
```
## Resize

Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
If one of width or height is 0, the image aspect ratio is preserved.
Optional cropping.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Resize](https://m3o.com/image/api#Resize)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
// If one of width or height is 0, the image aspect ratio is preserved.
// Optional cropping.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function base64toHostedImage() {
	const rsp = await imageService.resize({
  "base64": "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  "height": 100,
  "name": "cat.png",
  "outputURL": true,
  "width": 100
})
	console.log(rsp)
	
}

base64toHostedImage()
```
## Resize

Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
If one of width or height is 0, the image aspect ratio is preserved.
Optional cropping.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Resize](https://m3o.com/image/api#Resize)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
// If one of width or height is 0, the image aspect ratio is preserved.
// Optional cropping.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function base64toBase64image() {
	const rsp = await imageService.resize({
  "base64": "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  "height": 100,
  "width": 100
})
	console.log(rsp)
	
}

base64toBase64image()
```
## Resize

Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
If one of width or height is 0, the image aspect ratio is preserved.
Optional cropping.
To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
with each parameter as a form field.


[https://m3o.com/image/api#Resize](https://m3o.com/image/api#Resize)

```js
const { ImageService } = require('m3o/image');

const imageService = new ImageService(process.env.M3O_API_TOKEN)

// Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
// If one of width or height is 0, the image aspect ratio is preserved.
// Optional cropping.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function base64toBase64imageWithCropping() {
	const rsp = await imageService.resize({
  "base64": "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
  "cropOptions": {
    "height": 50,
    "width": 50
  },
  "height": 100,
  "width": 100
})
	console.log(rsp)
	
}

base64toBase64imageWithCropping()
```
