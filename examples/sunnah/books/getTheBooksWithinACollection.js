const { SunnahService } = require("m3o/sunnah");

// Get a list of books from within a collection. A book can contain many chapters
// each with its own hadiths.
async function getTheBooksWithinAcollection() {
  let sunnahService = new SunnahService(process.env.M3O_API_TOKEN);
  let rsp = await sunnahService.books({
    collection: "bukhari",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getTheBooksWithinAcollection();
