// npm install m3o
const { Youtube } = require("m3o/youtube");

const youtubeService = new Youtube(process.env.M3O_API_TOKEN);

// Search for videos on YouTube
async function searchForVideos() {
  const rsp = await youtubeService.search({
    query: "donuts",
  });
  console.log(rsp);
}

searchForVideos();
