const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Return a list of supported regions
async function main() {
  let rsp = await m3o.function.regions({});
  console.log(rsp);
}

main();
