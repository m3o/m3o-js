const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Codes returns the supported currency codes for the API
async function main() {
  let rsp = await m3o.currency.codes({});
  console.log(rsp);
}

main();
