const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.thumbnail.screenshot({
    height: 600,
    url: "https://google.com",
    width: 600,
  });
  console.log(rsp);
}

main();
