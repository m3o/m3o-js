// npm install m3o
const { Twitter } = require("m3o/twitter");

const twitterService = new Twitter(process.env.M3O_API_TOKEN);

// Search for tweets with a simple query
async function searchForTweets() {
  const rsp = await twitterService.search({
    query: "cats",
  });
  console.log(rsp);
}

searchForTweets();
