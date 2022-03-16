const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a single event
async function main() {
  let rsp = await m3o.analytics.read({
    name: "click",
  });
  console.log(rsp);
}

main();
