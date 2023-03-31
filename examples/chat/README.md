# Chat

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Chat/api](https://m3o.com/Chat/api).

Endpoints:

## List

List available chats


[https://m3o.com/chat/api#List](https://m3o.com/chat/api#List)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// List available chats
async function listGroups() {
	const rsp = await chatService.list({})
	console.log(rsp)
	
}

listGroups()
```
## Delete

Delete a group


[https://m3o.com/chat/api#Delete](https://m3o.com/chat/api#Delete)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Delete a group
async function deleteAchat() {
	const rsp = await chatService.delete({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910"
})
	console.log(rsp)
	
}

deleteAchat()
```
## Invite

Invite a user to a group


[https://m3o.com/chat/api#Invite](https://m3o.com/chat/api#Invite)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Invite a user to a group
async function inviteAuser() {
	const rsp = await chatService.invite({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  "user_id": "user-1"
})
	console.log(rsp)
	
}

inviteAuser()
```
## Join

Join a group


[https://m3o.com/chat/api#Join](https://m3o.com/chat/api#Join)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Join a group
async function joinAgroup() {
	const rsp = await chatService.join({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  "user_id": "user-2"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

joinAgroup()
```
## Kick

Kick a user from a group


[https://m3o.com/chat/api#Kick](https://m3o.com/chat/api#Kick)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Kick a user from a group
async function kickAuserFromAgroup() {
	const rsp = await chatService.kick({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  "user_id": "user-1"
})
	console.log(rsp)
	
}

kickAuserFromAgroup()
```
## Leave

Leave a group


[https://m3o.com/chat/api#Leave](https://m3o.com/chat/api#Leave)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Leave a group
async function leaveAgroup() {
	const rsp = await chatService.leave({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  "user_id": "user-1"
})
	console.log(rsp)
	
}

leaveAgroup()
```
## Create

Create a new group


[https://m3o.com/chat/api#Create](https://m3o.com/chat/api#Create)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Create a new group
async function createAnewChat() {
	const rsp = await chatService.create({
  "description": "The general group",
  "name": "general"
})
	console.log(rsp)
	
}

createAnewChat()
```
## Send

Connect to a chat to receive a stream of messages
Send a message to a chat


[https://m3o.com/chat/api#Send](https://m3o.com/chat/api#Send)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// Connect to a chat to receive a stream of messages
// Send a message to a chat
async function sendAmessage() {
	const rsp = await chatService.send({
  "client": "web",
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910",
  "subject": "Random",
  "text": "Hey whats up?",
  "user_id": "user-1"
})
	console.log(rsp)
	
}

sendAmessage()
```
## History

List the messages in a chat


[https://m3o.com/chat/api#History](https://m3o.com/chat/api#History)

```js
const { ChatService } = require('m3o/chat');

const chatService = new ChatService(process.env.M3O_API_TOKEN)

// List the messages in a chat
async function getChatHistory() {
	const rsp = await chatService.history({
  "group_id": "d8057208-f81a-4e14-ad7f-c29daa2bb910"
})
	console.log(rsp)
	
}

getChatHistory()
```
