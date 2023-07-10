# Notes

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Notes/api](https://m3o.com/Notes/api).

Endpoints:

## List

List all the notes


[https://m3o.com/notes/api#List](https://m3o.com/notes/api#List)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// List all the notes
async function listAllNotes() {
	const rsp = await notesService.list({})
	console.log(rsp)
	
}

listAllNotes()
```
## Update

Update a note


[https://m3o.com/notes/api#Update](https://m3o.com/notes/api#Update)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// Update a note
async function updateAnote() {
	const rsp = await notesService.update({
  "note": {
    "id": "63c0cdf8-2121-11ec-a881-0242e36f037a",
    "text": "Updated note text",
    "title": "Update Note"
  }
})
	console.log(rsp)
	
}

updateAnote()
```
## Delete

Delete a note


[https://m3o.com/notes/api#Delete](https://m3o.com/notes/api#Delete)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// Delete a note
async function deleteAnote() {
	const rsp = await notesService.delete({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

deleteAnote()
```
## Events

Subscribe to notes events


[https://m3o.com/notes/api#Events](https://m3o.com/notes/api#Events)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// Subscribe to notes events
async function subscribeToEvents() {
	const rsp = await notesService.events({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

subscribeToEvents()
```
## Create

Create a new note


[https://m3o.com/notes/api#Create](https://m3o.com/notes/api#Create)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// Create a new note
async function createAnote() {
	const rsp = await notesService.create({
  "text": "This is my note",
  "title": "New Note"
})
	console.log(rsp)
	
}

createAnote()
```
## Read

Read a note


[https://m3o.com/notes/api#Read](https://m3o.com/notes/api#Read)

```js
const { NotesService } = require('m3o/notes');

const notesService = new NotesService(process.env.M3O_API_TOKEN)

// Read a note
async function readAnote() {
	const rsp = await notesService.read({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

readAnote()
```
