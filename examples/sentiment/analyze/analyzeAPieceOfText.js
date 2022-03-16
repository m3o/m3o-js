const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Analyze and score a piece of text
async function main() {
  let rsp = await m3o.sentiment.analyze({
    text: "this is amazing",
  });
  console.log(rsp);
}

main();
