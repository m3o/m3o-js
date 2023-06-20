# Ai

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ai/api](https://m3o.com/Ai/api).

Endpoints:

## Chat

Make a request to ChatGPT


[https://m3o.com/ai/api#Chat](https://m3o.com/ai/api#Chat)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Make a request to ChatGPT
async function chatWithChatGpt() {
	const rsp = await aiService.chat({
  "model": "gpt-3.5-turbo",
  "prompt": "who is leonardo davinci"
})
	console.log(rsp)
	
}

chatWithChatGpt()
```
## Complete

Make a request to the AI


[https://m3o.com/ai/api#Complete](https://m3o.com/ai/api#Complete)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Make a request to the AI
async function completeTheText() {
	const rsp = await aiService.complete({
  "text": "who is leonardo davinci"
})
	console.log(rsp)
	
}

completeTheText()
```
## Edit

Edit or edit prompt/code


[https://m3o.com/ai/api#Edit](https://m3o.com/ai/api#Edit)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Edit or edit prompt/code
async function editText() {
	const rsp = await aiService.edit({
  "text": "What day of the wek is it?"
})
	console.log(rsp)
	
}

editText()
```
## Generate

Generate an image from prompt


[https://m3o.com/ai/api#Generate](https://m3o.com/ai/api#Generate)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Generate an image from prompt
async function generateImage() {
	const rsp = await aiService.generate({
  "text": "a cat on a ball"
})
	console.log(rsp)
	
}

generateImage()
```
## Moderate

Moderate hate speech


[https://m3o.com/ai/api#Moderate](https://m3o.com/ai/api#Moderate)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Moderate hate speech
async function moderateHateSpeech() {
	const rsp = await aiService.moderate({
  "text": "I want to kill him"
})
	console.log(rsp)
	
}

moderateHateSpeech()
```
