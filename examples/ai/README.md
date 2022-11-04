# Ai

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Ai/api](https://m3o.com/Ai/api).

Endpoints:

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
## Call

Make a request to the AI


[https://m3o.com/ai/api#Call](https://m3o.com/ai/api#Call)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Make a request to the AI
async function callTheAi() {
	const rsp = await aiService.call({
  "text": "who is leonardo davinci"
})
	console.log(rsp)
	
}

callTheAi()
```
## Check

Check or edit text/code


[https://m3o.com/ai/api#Check](https://m3o.com/ai/api#Check)

```js
const { AiService } = require('m3o/ai');

const aiService = new AiService(process.env.M3O_API_TOKEN)

// Check or edit text/code
async function checkText() {
	const rsp = await aiService.check({
  "text": "What day of the wek is it?"
})
	console.log(rsp)
	
}

checkText()
```
