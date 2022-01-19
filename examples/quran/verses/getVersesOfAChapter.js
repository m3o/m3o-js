// npm install m3o
const { QuranService } = require("m3o/quran");

const quranService = new QuranService(process.env.M3O_API_TOKEN);

// Lookup the verses (ayahs) for a chapter including
// translation, interpretation and breakdown by individual
// words.
async function getVersesOfAchapter() {
  const rsp = await quranService.verses({
    chapter: 1,
  });
  console.log(rsp);
}

getVersesOfAchapter();
