// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Create a search index by name
async function createAnIndex() {
  const rsp = await searchService.createIndex({
    index: "customers",
  });
  console.log(rsp);
}

createAnIndex();
