const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all the available keys
async function main() {
  let rsp = await m3o.cache.listKeys({});
  console.log(rsp);
}

main();
