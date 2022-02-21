// npm install m3o
const { Rss } = require("m3o/rss");

const rssService = new Rss(process.env.M3O_API_TOKEN);

// List the saved RSS fields
async function listRssFeeds() {
  const rsp = await rssService.list({});
  console.log(rsp);
}

listRssFeeds();
