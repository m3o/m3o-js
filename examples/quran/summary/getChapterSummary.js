// npm install m3o
const { QuranService } = require("m3o/quran");

const quranService = new QuranService(process.env.M3O_API_TOKEN);

// Get a summary for a given chapter (surah)
async function getChapterSummary() {
  const rsp = await quranService.summary({
    chapter: 1,
  });
  console.log(rsp);
}

getChapterSummary();
