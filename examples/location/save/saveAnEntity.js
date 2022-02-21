// npm install m3o
const { Location } = require("m3o/location");

const locationService = new Location(process.env.M3O_API_TOKEN);

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
