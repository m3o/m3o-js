const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.location.save({
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

main();
