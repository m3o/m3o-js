// npm install m3o
const { ListsService } = require("m3o/lists");

const listsService = new ListsService(process.env.M3O_API_TOKEN);

// List all the lists
async function listAllLists() {
  const rsp = await listsService.list({});
  console.log(rsp);
}

listAllLists();
