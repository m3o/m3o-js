# Translate

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Translate/api](https://m3o.com/Translate/api).

Endpoints:

## Text

TextRequest is the basic edition request


[https://m3o.com/translate/api#Text](https://m3o.com/translate/api#Text)

```js
const { TranslateService } = require('m3o/translate');

const translateService = new TranslateService(process.env.M3O_API_TOKEN)

// TextRequest is the basic edition request
async function translateString() {
	const rsp = await translateService.text({
  "contents": [
    "pen",
    "pencil"
  ],
  "format": "text",
  "model": "nmt",
  "source": "en",
  "target": "zh"
})
	console.log(rsp)
	
}

translateString()
```
