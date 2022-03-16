const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.rss.add({
    category: "news",
    name: "bbc",
    url: "http://feeds.bbci.co.uk/news/rss.xml",
  });
  console.log(rsp);
}

main();
