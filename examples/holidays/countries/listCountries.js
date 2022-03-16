const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the list of countries that are supported by this API
async function main() {
  let rsp = await m3o.holidays.countries({});
  console.log(rsp);
}

main();
