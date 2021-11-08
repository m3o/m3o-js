const { NotesService } = require("m3o/notes");

// Subscribe to notes events
async function subscribeToEvents() {
  let notesService = new NotesService(process.env.M3O_API_TOKEN);
  let rsp = await notesService.events({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToEvents();
