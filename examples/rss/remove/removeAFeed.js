// npm install m3o
const { RssService } = require("m3o/rss");

const rssService = new RssService(process.env.M3O_API_TOKEN);

// Remove an RSS feed by name
async function removeAfeed() {
  const rsp = await rssService.remove({
    name: "bbc",
  });
  console.log(rsp);
}

removeAfeed();
