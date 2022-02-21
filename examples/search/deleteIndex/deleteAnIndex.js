// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

// Delete an index by name
async function deleteAnIndex() {
  const rsp = await searchService.deleteIndex({
    index: "customers",
  });
  console.log(rsp);
}

deleteAnIndex();
