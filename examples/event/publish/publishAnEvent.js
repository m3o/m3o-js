// npm install m3o
const { EventService } = require("m3o/event");

const eventService = new EventService(process.env.M3O_API_TOKEN);

// Publish a event to the event stream.
async function publishAnEvent() {
  const rsp = await eventService.publish({
    message: {
      id: "1",
      type: "signup",
      user: "john",
    },
    topic: "user",
  });
  console.log(rsp);
}

publishAnEvent();
