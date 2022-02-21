// npm install m3o
const { Lists } = require("m3o/lists");

const listsService = new Lists(process.env.M3O_API_TOKEN);

// Delete a list
async function deleteAlist() {
  const rsp = await listsService.delete({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

deleteAlist();
