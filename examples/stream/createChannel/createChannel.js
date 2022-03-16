const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create a channel with a given name and description. Channels are created automatically but
// this allows you to specify a description that's persisted for the lifetime of the channel.
async function main() {
  let rsp = await m3o.stream.createChannel({
    description: "The channel for all things",
    name: "general",
  });
  console.log(rsp);
}

main();
