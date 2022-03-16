const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.translate.text({
    content: "hello",
    format: "text",
    model: "nmt",
    source: "en",
    target: "fr",
  });
  console.log(rsp);
}

main();
