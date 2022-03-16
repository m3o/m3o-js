const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a list of books from within a collection. A book can contain many chapters
// each with its own hadiths.
async function main() {
  let rsp = await m3o.sunnah.books({
    collection: "bukhari",
  });
  console.log(rsp);
}

main();
