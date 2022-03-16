const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.qr.generate({
    size: 300,
    text: "https://m3o.com/qr",
  });
  console.log(rsp);
}

main();
