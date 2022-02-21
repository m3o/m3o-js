// npm install m3o
const { NewsService } = require("m3o/news");

const newsService = new NewsService(process.env.M3O_API_TOKEN);

// Get the latest news headlines
async function getNewsHeadlines() {
  const rsp = await newsService.headlines({
    date: "2021-11-24",
    language: "en",
    locale: "us",
  });
  console.log(rsp);
}

getNewsHeadlines();
