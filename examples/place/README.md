# Place

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Place/api](https://m3o.com/Place/api).

Endpoints:

## Search

Search for places by text query


[https://m3o.com/place/api#Search](https://m3o.com/place/api#Search)

```js
const { PlaceService } = require('m3o/place');

const placeService = new PlaceService(process.env.M3O_API_TOKEN)

// Search for places by text query
async function searchForPlaces() {
	const rsp = await placeService.search({
  "location": "51.5074577,-0.1297515",
  "query": "food"
})
	console.log(rsp)
	
}

searchForPlaces()
```
## Nearby

Find places nearby using a location


[https://m3o.com/place/api#Nearby](https://m3o.com/place/api#Nearby)

```js
const { PlaceService } = require('m3o/place');

const placeService = new PlaceService(process.env.M3O_API_TOKEN)

// Find places nearby using a location
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
