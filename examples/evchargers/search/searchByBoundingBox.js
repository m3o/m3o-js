const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search by giving a coordinate and a max distance, or bounding box and optional filters
async function main() {
  let rsp = await m3o.evchargers.search({
    box: {
      bottom_left: {
        latitude: 51.52627543859447,
        longitude: -0.03635349400295168,
      },
      top_right: {
        latitude: 51.56717121807993,
        longitude: -0.002293530559768285,
      },
    },
    max_results: 2,
  });
  console.log(rsp);
}

main();
