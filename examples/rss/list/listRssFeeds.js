const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List the saved RSS fields
async function main() {
  let rsp = await m3o.rss.list({});
  console.log(rsp);
}

main();
