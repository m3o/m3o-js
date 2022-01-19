// npm install m3o
const { MqService } = require("m3o/mq");

const mqService = new MqService(process.env.M3O_API_TOKEN);

// Subscribe to messages for a given topic.
async function subscribeToAtopic() {
  const rsp = await mqService.subscribe({
    topic: "events",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToAtopic();
