# Lists

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Lists/api](https://m3o.com/Lists/api).

Endpoints:

## Events

Subscribe to lists events


[https://m3o.com/lists/api#Events](https://m3o.com/lists/api#Events)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// Subscribe to lists events
async function subscribeToEvents() {
	const rsp = await listsService.events({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

subscribeToEvents()
```
## Create

Create a new list


[https://m3o.com/lists/api#Create](https://m3o.com/lists/api#Create)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// Create a new list
async function createAlist() {
	const rsp = await listsService.create({
  "text": "This is my list",
  "title": "New List"
})
	console.log(rsp)
	
}

createAlist()
```
## Read

Read a list


[https://m3o.com/lists/api#Read](https://m3o.com/lists/api#Read)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// Read a list
async function readAlist() {
	const rsp = await listsService.read({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

readAlist()
```
## List

List all the lists


[https://m3o.com/lists/api#List](https://m3o.com/lists/api#List)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// List all the lists
async function listAllLists() {
	const rsp = await listsService.list({})
	console.log(rsp)
	
}

listAllLists()
```
## Update

Update a list


[https://m3o.com/lists/api#Update](https://m3o.com/lists/api#Update)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// Update a list
async function updateAlist() {
	const rsp = await listsService.update({
  "list": {
    "id": "63c0cdf8-2121-11ec-a881-0242e36f037a",
    "text": "Updated list text",
    "title": "Update List"
  }
})
	console.log(rsp)
	
}

updateAlist()
```
## Delete

Delete a list


[https://m3o.com/lists/api#Delete](https://m3o.com/lists/api#Delete)

```js
const { ListsService } = require('m3o/lists');

const listsService = new ListsService(process.env.M3O_API_TOKEN)

// Delete a list
async function deleteAlist() {
	const rsp = await listsService.delete({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

deleteAlist()
```
