const m3o = require("m3o").default(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.url.delete({
    shortURL: "https://m3o.one/u/f8f3f83f3f83g",
  });
  console.log(rsp);
}

main();
