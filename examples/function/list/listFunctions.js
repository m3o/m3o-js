const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all the deployed functions
async function main() {
  let rsp = await m3o.function.list({});
  console.log(rsp);
}

main();
