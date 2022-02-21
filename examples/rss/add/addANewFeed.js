// npm install m3o
const { RssService } = require("m3o/rss");

const rssService = new RssService(process.env.M3O_API_TOKEN);

// Add a new RSS feed with a name, url, and category
async function addAnewFeed() {
  const rsp = await rssService.add({
    category: "news",
    name: "bbc",
    url: "http://feeds.bbci.co.uk/news/rss.xml",
  });
  console.log(rsp);
}

addAnewFeed();
