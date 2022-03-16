const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Return a random postcode and its related info
async function main() {
  let rsp = await m3o.postcode.random({});
  console.log(rsp);
}

main();
