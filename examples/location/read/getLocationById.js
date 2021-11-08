const { LocationService } = require("m3o/location");

// Read an entity by its ID
async function getLocationById() {
  let locationService = new LocationService(process.env.M3O_API_TOKEN);
  let rsp = await locationService.read({
    id: "1",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getLocationById();
