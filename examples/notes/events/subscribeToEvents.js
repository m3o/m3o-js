// npm install m3o
const { Notes } = require("m3o/notes");

const notesService = new Notes(process.env.M3O_API_TOKEN);

// Subscribe to notes events
async function subscribeToEvents() {
  const rsp = await notesService.events({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToEvents();
