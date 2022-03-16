const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Returns the full list of supported symbols
async function main() {
  let rsp = await m3o.crypto.symbols({});
  console.log(rsp);
}

main();
