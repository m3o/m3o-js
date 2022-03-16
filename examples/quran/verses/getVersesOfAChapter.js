const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Lookup the verses (ayahs) for a chapter including
// translation, interpretation and breakdown by individual
// words.
async function main() {
  let rsp = await m3o.quran.verses({
    chapter: 1,
  });
  console.log(rsp);
}

main();
