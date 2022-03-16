const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Proxy returns the destination URL of a short URL.
async function main() {
  let rsp = await m3o.url.proxy({
    shortURL: "https://m3o.one/u/ck6SGVkYp",
  });
  console.log(rsp);
}

main();
