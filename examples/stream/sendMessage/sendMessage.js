// npm install m3o
const { StreamService } = require("m3o/stream");

const streamService = new StreamService(process.env.M3O_API_TOKEN);

// Send a message to the stream.
async function sendMessage() {
  const rsp = await streamService.sendMessage({
    channel: "general",
    text: "Hey checkout this tweet https://twitter.com/m3oservices/status/1455291054295498752",
  });
  console.log(rsp);
}

sendMessage();
