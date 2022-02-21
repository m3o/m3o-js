// npm install m3o
const { RssService } = require("m3o/rss");

const rssService = new RssService(process.env.M3O_API_TOKEN);

// List the saved RSS fields
async function listRssFeeds() {
  const rsp = await rssService.list({});
  console.log(rsp);
}

listRssFeeds();
