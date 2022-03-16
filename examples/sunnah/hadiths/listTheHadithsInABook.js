const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Hadiths returns a list of hadiths and their corresponding text for a
// given book within a collection.
async function main() {
  let rsp = await m3o.sunnah.hadiths({
    book: 1,
    collection: "bukhari",
  });
  console.log(rsp);
}

main();
