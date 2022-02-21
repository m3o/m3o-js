// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

// Search for records in a given in index
async function searchOnMultipleFieldsand() {
  const rsp = await searchService.search({
    index: "customers",
    query: "name == 'John' AND starsign == 'Leo'",
  });
  console.log(rsp);
}

searchOnMultipleFieldsand();
