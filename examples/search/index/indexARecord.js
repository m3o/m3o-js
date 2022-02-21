// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Index a record i.e. insert a document to search for.
async function indexArecord() {
  const rsp = await searchService.index({
    data: {
      age: 37,
      name: "John Doe",
      starsign: "Leo",
    },
    index: "customers",
  });
  console.log(rsp);
}

indexArecord();
