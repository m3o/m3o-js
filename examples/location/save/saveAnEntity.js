// npm install m3o
const { LocationService } = require("m3o/location");

const locationService = new LocationService(process.env.M3O_API_TOKEN);

// Save an entity's current position
async function saveAnEntity() {
  const rsp = await locationService.save({
    entity: {
      id: "1",
      location: {
        latitude: 51.511061,
        longitude: -0.120022,
        timestamp: "1622802761",
      },
      type: "bike",
    },
  });
  console.log(rsp);
}

saveAnEntity();
