const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.place.search({
    location: "51.5074577,-0.1297515",
    query: "food",
  });
  console.log(rsp);
}

main();
