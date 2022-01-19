// npm install m3o
const { MqService } = require("m3o/mq");

const mqService = new MqService(process.env.M3O_API_TOKEN);

// Publish a message. Specify a topic to group messages for a specific topic.
async function publishAmessage() {
  const rsp = await mqService.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "events",
  });
  console.log(rsp);
}

publishAmessage();
