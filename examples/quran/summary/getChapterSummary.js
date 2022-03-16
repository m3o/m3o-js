const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a summary for a given chapter (surah)
async function main() {
  let rsp = await m3o.quran.summary({
    chapter: 1,
  });
  console.log(rsp);
}

main();
