const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Return a list of supported runtimes
async function main() {
  let rsp = await m3o.function.runtimes({});
  console.log(rsp);
}

main();
