const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the current global trending topics
async function main() {
  let rsp = await m3o.twitter.trends({});
  console.log(rsp);
}

main();
