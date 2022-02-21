// npm install m3o
const { UrlService } = require("m3o/url");

const urlService = new UrlService(process.env.M3O_API_TOKEN);

// List all the shortened URLs
async function listYourShortenedUrls() {
  const rsp = await urlService.list({});
  console.log(rsp);
}

listYourShortenedUrls();
