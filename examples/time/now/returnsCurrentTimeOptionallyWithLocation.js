const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the current time
async function main() {
  let rsp = await m3o.time.now({});
  console.log(rsp);
}

main();
