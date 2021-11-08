const { QuranService } = require("m3o/quran");

// Search the Quran for any form of query or questions
async function searchTheQuran() {
  let quranService = new QuranService(process.env.M3O_API_TOKEN);
  let rsp = await quranService.search({
    query: "messenger",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

searchTheQuran();
