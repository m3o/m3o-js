// npm install m3o
const { Search } = require("m3o/search");

const searchService = new Search(process.env.M3O_API_TOKEN);

// Delete a record given its ID
async function deleteArecord() {
  const rsp = await searchService.delete({
    id: "1234",
    index: "customers",
  });
  console.log(rsp);
}

deleteArecord();
