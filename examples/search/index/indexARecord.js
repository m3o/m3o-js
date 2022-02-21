// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

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
