const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List all the active channels
async function main() {
  let rsp = await m3o.stream.listChannels({});
  console.log(rsp);
}

main();
