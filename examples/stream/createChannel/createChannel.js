// npm install m3o
const { StreamService } = require("m3o/stream");

const streamService = new StreamService(process.env.M3O_API_TOKEN);

// Create a channel with a given name and description. Channels are created automatically but
// this allows you to specify a description that's persisted for the lifetime of the channel.
async function createChannel() {
  const rsp = await streamService.createChannel({
    description: "The channel for all things",
    name: "general",
  });
  console.log(rsp);
}

createChannel();
