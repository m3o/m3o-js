const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.url.shorten({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
  });
  console.log(rsp);
}

main();
