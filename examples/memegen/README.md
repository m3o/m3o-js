# Memegen

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Memegen/api](https://m3o.com/Memegen/api).

Endpoints:

## Templates

List the available templates


[https://m3o.com/memegen/api#Templates](https://m3o.com/memegen/api#Templates)

```js
const { MemegenService } = require('m3o/memegen');

const memegenService = new MemegenService(process.env.M3O_API_TOKEN)

// List the available templates
async function memeTemplates() {
	const rsp = await memegenService.templates({})
	console.log(rsp)
	
}

memeTemplates()
```
## Generate

Generate a meme using a template


[https://m3o.com/memegen/api#Generate](https://m3o.com/memegen/api#Generate)

```js
const { MemegenService } = require('m3o/memegen');

const memegenService = new MemegenService(process.env.M3O_API_TOKEN)

// Generate a meme using a template
async function generateAmeme() {
	const rsp = await memegenService.generate({
  "bottom_text": "Huh?",
  "id": "444501",
  "top_text": "WTF"
})
	console.log(rsp)
	
}

generateAmeme()
```
