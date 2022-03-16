const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search by giving a coordinate and a max distance, or bounding box and optional filters
async function main() {
  let rsp = await m3o.evchargers.search({
    distance: 2000,
    location: {
      latitude: 51.53336351319885,
      longitude: -0.0252,
    },
    max_results: 2,
  });
  console.log(rsp);
}

main();
