const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Return the support regions
async function main() {
  let rsp = await m3o.app.regions({});
  console.log(rsp);
}

main();
