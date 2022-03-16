const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Purchase 1KG (0.001 tonne) of carbon offsets in a single request
async function main() {
  let rsp = await m3o.carbon.offset({});
  console.log(rsp);
}

main();
