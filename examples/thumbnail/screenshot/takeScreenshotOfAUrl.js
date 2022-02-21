// npm install m3o
const { ThumbnailService } = require("m3o/thumbnail");

const thumbnailService = new ThumbnailService(process.env.M3O_API_TOKEN);

// Create a thumbnail screenshot by passing in a url, height and width
async function takeScreenshotOfAurl() {
  const rsp = await thumbnailService.screenshot({
    height: 600,
    url: "https://google.com",
    width: 600,
  });
  console.log(rsp);
}

takeScreenshotOfAurl();
