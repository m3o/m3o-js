// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Delete an index by name
async function deleteAnIndex() {
  const rsp = await searchService.deleteIndex({
    index: "customers",
  });
  console.log(rsp);
}

deleteAnIndex();
