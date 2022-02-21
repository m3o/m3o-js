// npm install m3o
const { EventService } = require("m3o/event");

const eventService = new EventService(process.env.M3O_API_TOKEN);

// Read stored events
async function readEventsOnAtopic() {
  const rsp = await eventService.read({
    topic: "user",
  });
  console.log(rsp);
}

readEventsOnAtopic();
