// npm install m3o
const { Lists } = require("m3o/lists");

const listsService = new Lists(process.env.M3O_API_TOKEN);

// Create a new list
async function createAlist() {
  const rsp = await listsService.create({
    text: "This is my list",
    title: "New List",
  });
  console.log(rsp);
}

createAlist();
