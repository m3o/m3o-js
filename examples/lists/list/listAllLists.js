// npm install m3o
const { Lists } = require("m3o/lists");

const listsService = new Lists(process.env.M3O_API_TOKEN);

// List all the lists
async function listAllLists() {
  const rsp = await listsService.list({});
  console.log(rsp);
}

listAllLists();
