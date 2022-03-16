const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// List the Chapters (surahs) of the Quran
async function main() {
  let rsp = await m3o.quran.chapters({
    language: "en",
  });
  console.log(rsp);
}

main();
