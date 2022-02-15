# Place

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Place/api](https://m3o.com/Place/api).

Endpoints:

## Nearby

Search for places nearby, points of interest and geographic locations


[https://m3o.com/place/api#Nearby](https://m3o.com/place/api#Nearby)

```js
const { PlaceService } = require('m3o/place');

const placeService = new PlaceService(process.env.M3O_API_TOKEN)

// Search for places nearby, points of interest and geographic locations
async function findPlacesNearby() {
	const rsp = await placeService.nearby({
  "keyword": "tesco",
  "location": "51.5074577,-0.1297515",
  "type": "store"
})
	console.log(rsp)
	
}

findPlacesNearby()
```
## Search




[https://m3o.com/place/api#Search](https://m3o.com/place/api#Search)

```js
const { PlaceService } = require('m3o/place');

const placeService = new PlaceService(process.env.M3O_API_TOKEN)

// 
async function searchForPlaces() {
	const rsp = await placeService.search({
  "location": "51.5074577,-0.1297515",
  "query": "food"
})
	console.log(rsp)
	
}

searchForPlaces()
```
