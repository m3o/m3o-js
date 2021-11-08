const { YoutubeService } = require("m3o/youtube");

// Search for videos on YouTube
async function searchForVideos() {
  let youtubeService = new YoutubeService(process.env.M3O_API_TOKEN);
  let rsp = await youtubeService.search({
    query: "donuts",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

searchForVideos();
