// npm install m3o
const { EventService } = require("m3o/event");

const eventService = new EventService(process.env.M3O_API_TOKEN);

// Consume events from a given topic.
async function consumeFromAtopic() {
  const rsp = await eventService.consume({
    topic: "user",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

consumeFromAtopic();
