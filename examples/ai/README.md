# Ai

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ai/api](https://m3o.com/Ai/api).

Endpoints:

## Stream

Stream a response from chatgpt


[https://m3o.com/ai/api#Stream](https://m3o.com/ai/api#Stream)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Stream a response from chatgpt
async function streamResponseFromChatGpt() {
	const rsp = await aiService.stream({
  "model": "gpt-3.5-turbo",
  "prompt": "write helloworld in node.js"
})
	rsp.onMessage(msg => {
		console.log(msg)
	})
}

streamResponseFromChatGpt()
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
## Chat

Make a request to ChatGPT


[https://m3o.com/ai/api#Chat](https://m3o.com/ai/api#Chat)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Make a request to ChatGPT
async function chatWithChatGpt() {
	const rsp = await aiService.chat({
  "context": [
    {
      "prompt": "who is leonardo davinci",
      "reply": "Leonardo da Vinci was an Italian polymath during the Renaissance period. He was born in 1452 in Vinci, Italy, and is renowned for his contributions to various fields such as science, engineering, art, and anatomy. Da Vinci's most famous works include the Mona Lisa and The Last Supper. He is often considered one of the greatest artists and thinkers of all time."
    },
    {
      "prompt": "where is he from?",
      "reply": "Leonardo da Vinci was from Vinci, a town in Tuscany, Italy."
    }
  ],
  "model": "gpt-3.5-turbo",
  "prompt": "when did he die?"
})
	console.log(rsp)
	
}

chatWithChatGpt()
```
