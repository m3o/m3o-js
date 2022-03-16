const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Lookup a UK vehicle by it's registration number
async function main() {
  let rsp = await m3o.vehicle.lookup({
    registration: "LC60OTA",
  });
  console.log(rsp);
}

main();
