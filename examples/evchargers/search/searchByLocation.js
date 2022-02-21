// npm install m3o
const { Evchargers } = require("m3o/evchargers");

const evchargersService = new Evchargers(process.env.M3O_API_TOKEN);

// Search by giving a coordinate and a max distance, or bounding box and optional filters
async function searchByLocation() {
  const rsp = await evchargersService.search({
    distance: 2000,
    location: {
      latitude: 51.53336351319885,
      longitude: -0.0252,
    },
    max_results: 2,
  });
  console.log(rsp);
}

searchByLocation();
