// npm install m3o
const { GoogleService } = require("m3o/google");

const googleService = new GoogleService(process.env.M3O_API_TOKEN);

// Search for videos on Google
async function searchForVideos() {
  const rsp = await googleService.search({
    query: "how to make donuts",
  });
  console.log(rsp);
}

searchForVideos();
