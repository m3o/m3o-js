// npm install m3o
const { Twitter } = require("m3o/twitter");

const twitterService = new Twitter(process.env.M3O_API_TOKEN);

// Get the current global trending topics
async function getTheCurrentGlobalTrendingTopics() {
  const rsp = await twitterService.trends({});
  console.log(rsp);
}

getTheCurrentGlobalTrendingTopics();
