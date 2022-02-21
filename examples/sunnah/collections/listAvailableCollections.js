// npm install m3o
const { Sunnah } = require("m3o/sunnah");

const sunnahService = new Sunnah(process.env.M3O_API_TOKEN);

// Get a list of available collections. A collection is
// a compilation of hadiths collected and written by an author.
async function listAvailableCollections() {
  const rsp = await sunnahService.collections({});
  console.log(rsp);
}

listAvailableCollections();
