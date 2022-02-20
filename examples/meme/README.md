# Meme

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Meme/api](https://m3o.com/Meme/api).

Endpoints:

## Templates

List the available templates


[https://m3o.com/meme/api#Templates](https://m3o.com/meme/api#Templates)

```js
const { MemeService } = require('m3o/meme');

const memeService = new MemeService(process.env.M3O_API_TOKEN)

// List the available templates
async function memeTemplates() {
	const rsp = await memeService.templates({})
	console.log(rsp)
	
}

memeTemplates()
```
## Generate




[https://m3o.com/meme/api#Generate](https://m3o.com/meme/api#Generate)

```js
const { MemeService } = require('m3o/meme');

const memeService = new MemeService(process.env.M3O_API_TOKEN)

// 
async function generateAmeme() {
	const rsp = await memeService.generate({
  "bottom_text": "Huh?",
  "id": "444501",
  "top_text": "WTF"
})
	console.log(rsp)
	
}

generateAmeme()
```
