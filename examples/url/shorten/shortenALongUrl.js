// npm install m3o
const { Url } = require("m3o/url");

const urlService = new Url(process.env.M3O_API_TOKEN);

// Shorten a long URL
async function shortenAlongUrl() {
  const rsp = await urlService.shorten({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
  });
  console.log(rsp);
}

shortenAlongUrl();
