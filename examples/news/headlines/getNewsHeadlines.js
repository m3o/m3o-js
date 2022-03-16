const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.news.headlines({
    date: "2021-11-24",
    language: "en",
    locale: "us",
  });
  console.log(rsp);
}

main();
