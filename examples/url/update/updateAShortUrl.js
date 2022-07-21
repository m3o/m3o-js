const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.url.update({
    destinationURL: "https://mynewsite.com/this-is-a-rather-long-web-address",
    shortURL: "https://m3o.one/u/f8f3f83f3f83g",
  });
  console.log(rsp);
}

main();
