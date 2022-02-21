// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Search for records in a given in index
async function searchForArecord() {
  const rsp = await searchService.search({
    index: "customers",
    query: "name == 'John'",
  });
  console.log(rsp);
}

searchForArecord();
