const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a list of available collections. A collection is
// a compilation of hadiths collected and written by an author.
async function main() {
  let rsp = await m3o.sunnah.collections({});
  console.log(rsp);
}

main();
