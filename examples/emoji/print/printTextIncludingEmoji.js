const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Print text and renders the emojis with aliases e.g
// let's grab a :beer: becomes let's grab a 🍺
async function main() {
  let rsp = await m3o.emoji.print({
    text: "let's grab a :beer:",
  });
  console.log(rsp);
}

main();
