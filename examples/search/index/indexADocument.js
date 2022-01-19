// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Index a document i.e. insert a document to search for.
async function indexAdocument() {
  const rsp = await searchService.index({
    document: {
      contents: {
        age: 37,
        name: "John Doe",
        starsign: "Leo",
      },
      id: "1234",
    },
    index: "customers",
  });
  console.log(rsp);
}

indexAdocument();
