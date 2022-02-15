// npm install m3o
const { PlaceService } = require("m3o/place");

const placeService = new PlaceService(process.env.M3O_API_TOKEN);

// Autocomplete queries (coming soon)
async function autocompleteQueries() {
  const rsp = await placeService.autocomplete({});
  console.log(rsp);
}

autocompleteQueries();
