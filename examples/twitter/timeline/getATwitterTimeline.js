// npm install m3o
const { Twitter } = require("m3o/twitter");

const twitterService = new Twitter(process.env.M3O_API_TOKEN);

// Get the timeline for a given user
async function getAtwitterTimeline() {
  const rsp = await twitterService.timeline({
    limit: 1,
    username: "m3oservices",
  });
  console.log(rsp);
}

getAtwitterTimeline();
