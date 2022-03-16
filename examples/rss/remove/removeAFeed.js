const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Remove an RSS feed by name
async function main() {
  let rsp = await m3o.rss.remove({
    name: "bbc",
  });
  console.log(rsp);
}

main();
