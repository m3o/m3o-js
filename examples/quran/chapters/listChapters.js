// npm install m3o
const { Quran } = require("m3o/quran");

const quranService = new Quran(process.env.M3O_API_TOKEN);

// List the Chapters (surahs) of the Quran
async function listChapters() {
  const rsp = await quranService.chapters({
    language: "en",
  });
  console.log(rsp);
}

listChapters();
