// npm install m3o
const { TwitterService } = require("m3o/twitter");

const twitterService = new TwitterService(process.env.M3O_API_TOKEN);

// Get the current global trending topics
async function getTheCurrentGlobalTrendingTopics() {
  const rsp = await twitterService.trends({});
  console.log(rsp);
}

getTheCurrentGlobalTrendingTopics();
