// npm install m3o
const { Notes } = require("m3o/notes");

const notesService = new Notes(process.env.M3O_API_TOKEN);

// Create a new note
async function createAnote() {
  const rsp = await notesService.create({
    text: "This is my note",
    title: "New Note",
  });
  console.log(rsp);
}

createAnote();
