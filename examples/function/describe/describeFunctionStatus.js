const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the info for a deployed function
async function main() {
  let rsp = await m3o.function.describe({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
