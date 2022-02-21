// npm install m3o
const { Location } = require("m3o/location");

const locationService = new Location(process.env.M3O_API_TOKEN);

// Read an entity by its ID
async function getLocationById() {
  const rsp = await locationService.read({
    id: "1",
  });
  console.log(rsp);
}

getLocationById();
