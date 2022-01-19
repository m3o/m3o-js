// npm install m3o
const { SearchService } = require("m3o/search");

const searchService = new SearchService(process.env.M3O_API_TOKEN);

// Delete a document given its ID
async function deleteAdocument() {
  const rsp = await searchService.delete({
    id: "1234",
    index: "customers",
  });
  console.log(rsp);
}

deleteAdocument();
