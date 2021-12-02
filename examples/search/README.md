# Search

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Search/api](https://m3o.com/Search/api).

Endpoints:

## Vote

Vote to have the Search api launched faster!


[https://m3o.com/search/api#Vote](https://m3o.com/search/api#Vote)

```js
const { SearchService } = require('m3o/search');

const searchService = new SearchService(process.env.M3O_API_TOKEN)

// Vote to have the Search api launched faster!
async function voteForTheApi() {
	const rsp = await searchService.vote({
  "message": "Launch it!"
})
	console.log(rsp)
	
}

voteForTheApi()
```
