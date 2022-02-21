// npm install m3o
const { Sunnah } = require("m3o/sunnah");

const sunnahService = new Sunnah(process.env.M3O_API_TOKEN);

// Get a list of books from within a collection. A book can contain many chapters
// each with its own hadiths.
async function getTheBooksWithinAcollection() {
  const rsp = await sunnahService.books({
    collection: "bukhari",
  });
  console.log(rsp);
}

getTheBooksWithinAcollection();
