# Space

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Space/api](https://m3o.com/Space/api).

Endpoints:

## Vote

Vote to have the Space api launched faster!


[https://m3o.com/space/api#Vote](https://m3o.com/space/api#Vote)

```js
const { SpaceService } = require('m3o/space');

const spaceService = new SpaceService(process.env.M3O_API_TOKEN)

// Vote to have the Space api launched faster!
async function voteForTheApi() {
	const rsp = await spaceService.vote({
  "message": "Launch it!"
})
	console.log(rsp)
	
}

voteForTheApi()
```
