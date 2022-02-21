// npm install m3o
const { NotesService } = require("m3o/notes");

const notesService = new NotesService(process.env.M3O_API_TOKEN);

// Read a note
async function readAnote() {
  const rsp = await notesService.read({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

readAnote();
