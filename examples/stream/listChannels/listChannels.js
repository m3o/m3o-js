// npm install m3o
const { StreamService } = require("m3o/stream");

const streamService = new StreamService(process.env.M3O_API_TOKEN);

// List all the active channels
async function listChannels() {
  const rsp = await streamService.listChannels({});
  console.log(rsp);
}

listChannels();
