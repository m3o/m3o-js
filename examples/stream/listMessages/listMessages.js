const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List messages for a given channel
async function main() {
  let rsp = await m3o.stream.listMessages({
    channel: "general",
  });
  console.log(rsp);
}

main();
