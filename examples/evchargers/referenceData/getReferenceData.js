const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Retrieve reference data as used by this API and in conjunction with the Search endpoint
async function main() {
  let rsp = await m3o.evchargers.referenceData({});
  console.log(rsp);
}

main();
