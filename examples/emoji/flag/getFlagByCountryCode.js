const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the flag for a country. Requires country code e.g GB for great britain
async function main() {
  let rsp = await m3o.emoji.flag({
    alias: "GB",
  });
  console.log(rsp);
}

main();
