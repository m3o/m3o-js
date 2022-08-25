# Comments

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Comments/api](https://m3o.com/Comments/api).

Endpoints:

## Read

Read a comment


[https://m3o.com/comments/api#Read](https://m3o.com/comments/api#Read)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// Read a comment
async function readAcomment() {
	const rsp = await commentsService.read({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

readAcomment()
```
## List

List all the comments


[https://m3o.com/comments/api#List](https://m3o.com/comments/api#List)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// List all the comments
async function listAllComments() {
	const rsp = await commentsService.list({})
	console.log(rsp)
	
}

listAllComments()
```
## Update

Update a comment


[https://m3o.com/comments/api#Update](https://m3o.com/comments/api#Update)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// Update a comment
async function updateAcomment() {
	const rsp = await commentsService.update({
  "comment": {
    "id": "63c0cdf8-2121-11ec-a881-0242e36f037a",
    "subject": "Update Comment",
    "text": "Updated comment text"
  }
})
	console.log(rsp)
	
}

updateAcomment()
```
## Delete

Delete a comment


[https://m3o.com/comments/api#Delete](https://m3o.com/comments/api#Delete)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// Delete a comment
async function deleteAcomment() {
	const rsp = await commentsService.delete({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	console.log(rsp)
	
}

deleteAcomment()
```
## Events

Subscribe to comments events


[https://m3o.com/comments/api#Events](https://m3o.com/comments/api#Events)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// Subscribe to comments events
async function subscribeToEvents() {
	const rsp = await commentsService.events({
  "id": "63c0cdf8-2121-11ec-a881-0242e36f037a"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

subscribeToEvents()
```
## Create

Create a new comment


[https://m3o.com/comments/api#Create](https://m3o.com/comments/api#Create)

```js
const { CommentsService } = require('m3o/comments');

const commentsService = new CommentsService(process.env.M3O_API_TOKEN)

// Create a new comment
async function createAcomment() {
	const rsp = await commentsService.create({
  "subject": "New Comment",
  "text": "This is my comment"
})
	console.log(rsp)
	
}

createAcomment()
```
