const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get all the chapters of a given book within a collection.
async function main() {
  let rsp = await m3o.sunnah.chapters({
    book: 1,
    collection: "bukhari",
  });
  console.log(rsp);
}

main();
