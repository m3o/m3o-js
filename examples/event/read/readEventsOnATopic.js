// npm install m3o
const { Event } = require("m3o/event");

const eventService = new Event(process.env.M3O_API_TOKEN);

// Read stored events
async function readEventsOnAtopic() {
  const rsp = await eventService.read({
    topic: "user",
  });
  console.log(rsp);
}

readEventsOnAtopic();
