// npm install m3o
const { NotesService } = require("m3o/notes");

const notesService = new NotesService(process.env.M3O_API_TOKEN);

// List all the notes
async function listAllNotes() {
  const rsp = await notesService.list({});
  console.log(rsp);
}

listAllNotes();
