// npm install m3o
const { Place } = require("m3o/place");

const placeService = new Place(process.env.M3O_API_TOKEN);

// Search for places by text query
async function searchForPlaces() {
  const rsp = await placeService.search({
    location: "51.5074577,-0.1297515",
    query: "food",
  });
  console.log(rsp);
}

searchForPlaces();
