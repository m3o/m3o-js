// npm install m3o
const { Quran } = require("m3o/quran");

const quranService = new Quran(process.env.M3O_API_TOKEN);

// Search the Quran for any form of query or questions
async function searchTheQuran() {
  const rsp = await quranService.search({
    query: "messenger",
  });
  console.log(rsp);
}

searchTheQuran();
