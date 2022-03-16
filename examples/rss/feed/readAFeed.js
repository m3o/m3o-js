const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get an RSS feed by name. If no name is given, all feeds are returned. Default limit is 25 entries.
async function main() {
  let rsp = await m3o.rss.feed({
    name: "bbc",
  });
  console.log(rsp);
}

main();
