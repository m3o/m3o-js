# Space

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Space/api](https://m3o.com/Space/api).

Endpoints:

## Read

Read an object in space


[https://m3o.com/space/api#Read](https://m3o.com/space/api#Read)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Read an object in space
async function readAnObject() {
	const rsp = await spaceService.read({
  "name": "images/file.jpg"
})
	console.log(rsp)
	
}

readAnObject()
```
## Download

Download an object via a presigned url


[https://m3o.com/space/api#Download](https://m3o.com/space/api#Download)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Download an object via a presigned url
async function downloadAnObject() {
	const rsp = await spaceService.download({
  "name": "images/file.jpg"
})
	console.log(rsp)
	
}

downloadAnObject()
```
## Upload

Upload a large object (> 10MB). Returns a time limited presigned URL to be used for uploading the object


[https://m3o.com/space/api#Upload](https://m3o.com/space/api#Upload)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Upload a large object (> 10MB). Returns a time limited presigned URL to be used for uploading the object
async function uploadAnObject() {
	const rsp = await spaceService.upload({
  "name": "images/file.jpg"
})
	console.log(rsp)
	
}

uploadAnObject()
```
## Create

Create an object. Returns error if object with this name already exists. Max object size of 10MB, see Upload endpoint for larger objects. If you want to update an existing object use the `Update` endpoint


[https://m3o.com/space/api#Create](https://m3o.com/space/api#Create)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Create an object. Returns error if object with this name already exists. Max object size of 10MB, see Upload endpoint for larger objects. If you want to update an existing object use the `Update` endpoint
async function createAnObject() {
	const rsp = await spaceService.create({
  "name": "images/file.jpg",
  "object": "\u003cfile bytes\u003e",
  "visibility": "public"
})
	console.log(rsp)
	
}

createAnObject()
```
## Update

Update an object. If an object with this name does not exist, creates a new one.


[https://m3o.com/space/api#Update](https://m3o.com/space/api#Update)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Update an object. If an object with this name does not exist, creates a new one.
async function updateAnObject() {
	const rsp = await spaceService.update({
  "name": "images/file.jpg",
  "object": "\u003cfile bytes\u003e",
  "visibility": "public"
})
	console.log(rsp)
	
}

updateAnObject()
```
## Delete

Delete an object from space


[https://m3o.com/space/api#Delete](https://m3o.com/space/api#Delete)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Delete an object from space
async function deleteAnObject() {
	const rsp = await spaceService.delete({
  "name": "images/file.jpg"
})
	console.log(rsp)
	
}

deleteAnObject()
```
## List

List the objects in space


[https://m3o.com/space/api#List](https://m3o.com/space/api#List)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// List the objects in space
async function listObjectsWithPrefix() {
	const rsp = await spaceService.list({
  "prefix": "images/"
})
	console.log(rsp)
	
}

listObjectsWithPrefix()
```
## Head

Retrieve meta information about an object


[https://m3o.com/space/api#Head](https://m3o.com/space/api#Head)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Retrieve meta information about an object
async function headAnObject() {
	const rsp = await spaceService.head({
  "name": "images/file.jpg"
})
	console.log(rsp)
	
}

headAnObject()
```
