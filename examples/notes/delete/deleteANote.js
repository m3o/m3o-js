// npm install m3o
const { NotesService } = require("m3o/notes");

const notesService = new NotesService(process.env.M3O_API_TOKEN);

// Delete a note
async function deleteAnote() {
  const rsp = await notesService.delete({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

deleteAnote();
