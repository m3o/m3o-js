# Carbon

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Carbon/api](https://m3o.com/Carbon/api).

Endpoints:

## Offset

Purchase 1KG (0.001 tonne) of carbon offsets in a single request


[https://m3o.com/carbon/api#Offset](https://m3o.com/carbon/api#Offset)

```js
const { CarbonService } = require('m3o/carbon');

const carbonService = new CarbonService(process.env.M3O_API_TOKEN)

// Purchase 1KG (0.001 tonne) of carbon offsets in a single request
async function offsetCarbon() {
	const rsp = await carbonService.offset({})
	console.log(rsp)
	
}

offsetCarbon()
```
