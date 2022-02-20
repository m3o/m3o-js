// npm install m3o
const { ListsService } = require("m3o/lists");

const listsService = new ListsService(process.env.M3O_API_TOKEN);

// Read a list
async function readAlist() {
  const rsp = await listsService.read({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

readAlist();
