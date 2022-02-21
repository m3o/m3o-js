// npm install m3o
const { Twitter } = require("m3o/twitter");

const twitterService = new Twitter(process.env.M3O_API_TOKEN);

// Get a user's twitter profile
async function getAusersTwitterProfile() {
  const rsp = await twitterService.user({
    username: "crufter",
  });
  console.log(rsp);
}

getAusersTwitterProfile();
