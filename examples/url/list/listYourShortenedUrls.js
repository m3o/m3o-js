const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all the shortened URLs
async function main() {
  let rsp = await m3o.url.list({});
  console.log(rsp);
}

main();
