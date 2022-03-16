const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Find an emoji by its alias e.g :beer:
async function main() {
  let rsp = await m3o.emoji.find({
    alias: ":beer:",
  });
  console.log(rsp);
}

main();
