const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.location.search({
    center: {
      latitude: 51.511061,
      longitude: -0.120022,
    },
    numEntities: 10,
    radius: 100,
    type: "bike",
  });
  console.log(rsp);
}

main();
