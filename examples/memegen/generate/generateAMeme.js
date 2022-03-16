const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.memegen.generate({
    bottom_text: "Huh?",
    id: "444501",
    top_text: "WTF",
  });
  console.log(rsp);
}

main();
