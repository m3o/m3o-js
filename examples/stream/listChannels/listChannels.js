// npm install m3o
const { Stream } = require("m3o/stream");

const streamService = new Stream(process.env.M3O_API_TOKEN);

// List all the active channels
async function listChannels() {
  const rsp = await streamService.listChannels({});
  console.log(rsp);
}

listChannels();
