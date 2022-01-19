// npm install m3o
const { YoutubeService } = require("m3o/youtube");

const youtubeService = new YoutubeService(process.env.M3O_API_TOKEN);

// Embed a YouTube video
async function embedAyoutubeVideo() {
  const rsp = await youtubeService.embed({
    url: "https://www.youtube.com/watch?v=GWRWZu7XsJ0",
  });
  console.log(rsp);
}

embedAyoutubeVideo();
