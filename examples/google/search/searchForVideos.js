// npm install m3o
const { Google } = require("m3o/google");

const googleService = new Google(process.env.M3O_API_TOKEN);

// Search for videos on Google
async function searchForVideos() {
  const rsp = await googleService.search({
    query: "how to make donuts",
  });
  console.log(rsp);
}

searchForVideos();
