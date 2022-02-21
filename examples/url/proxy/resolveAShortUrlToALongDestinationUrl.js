// npm install m3o
const { UrlService } = require("m3o/url");

const urlService = new UrlService(process.env.M3O_API_TOKEN);

// Proxy returns the destination URL of a short URL.
async function resolveAshortUrlToAlongDestinationUrl() {
  const rsp = await urlService.proxy({
    shortURL: "https://m3o.one/u/ck6SGVkYp",
  });
  console.log(rsp);
}

resolveAshortUrlToAlongDestinationUrl();
