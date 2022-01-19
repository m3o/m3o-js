// npm install m3o
const { StreamService } = require("m3o/stream");

const streamService = new StreamService(process.env.M3O_API_TOKEN);

// List messages for a given channel
async function listMessages() {
  const rsp = await streamService.listMessages({
    channel: "general",
  });
  console.log(rsp);
}

listMessages();
