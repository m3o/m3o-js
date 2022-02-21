// npm install m3o
const { Lists } = require("m3o/lists");

const listsService = new Lists(process.env.M3O_API_TOKEN);

// Update a list
async function updateAlist() {
  const rsp = await listsService.update({
    list: {
      id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
      text: "Updated list text",
      title: "Update List",
    },
  });
  console.log(rsp);
}

updateAlist();
