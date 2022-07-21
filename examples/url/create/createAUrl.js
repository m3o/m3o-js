const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.url.create({
    destinationURL: "https://mysite.com/this-is-a-rather-long-web-address",
    id: "my-site",
  });
  console.log(rsp);
}

main();
