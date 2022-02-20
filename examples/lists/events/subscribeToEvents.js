// npm install m3o
const { ListsService } = require("m3o/lists");

const listsService = new ListsService(process.env.M3O_API_TOKEN);

// Subscribe to lists events
async function subscribeToEvents() {
  const rsp = await listsService.events({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

subscribeToEvents();
