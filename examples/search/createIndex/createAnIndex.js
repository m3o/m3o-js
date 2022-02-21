// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

// Create an index by name
async function createAnIndex() {
  const rsp = await searchService.createIndex({
    index: "customers",
  });
  console.log(rsp);
}

createAnIndex();
