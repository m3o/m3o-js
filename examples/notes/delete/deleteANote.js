const { NotesService } = require("m3o/notes");

// Delete a note
async function deleteAnote() {
  let notesService = new NotesService(process.env.M3O_API_TOKEN);
  let rsp = await notesService.delete({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

deleteAnote();
