// npm install m3o
const { PlaceService } = require("m3o/place");

const placeService = new PlaceService(process.env.M3O_API_TOKEN);

// Find places nearby using a location
async function findPlacesNearby() {
  const rsp = await placeService.nearby({
    keyword: "tesco",
    location: "51.5074577,-0.1297515",
    type: "store",
  });
  console.log(rsp);
}

findPlacesNearby();
