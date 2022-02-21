// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

// Search for records in a given in index
async function searchOnMultipleFieldsor() {
  const rsp = await searchService.search({
    index: "customers",
    query: "name == 'John' OR name == 'Jane'",
  });
  console.log(rsp);
}

searchOnMultipleFieldsor();
