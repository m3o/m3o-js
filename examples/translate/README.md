# Translate

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Translate/api](https://m3o.com/Translate/api).

Endpoints:

## Text

Basic text translation


[https://m3o.com/translate/api#Text](https://m3o.com/translate/api#Text)

```js
const { TranslateService } = require('m3o/translate');

const translateService = new TranslateService(process.env.M3O_API_TOKEN)

// Basic text translation
async function translateText() {
	const rsp = await translateService.text({
  "content": "hello",
  "format": "text",
  "model": "nmt",
  "source": "en",
  "target": "fr"
})
	console.log(rsp)
	
}

translateText()
```
