const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Track an event, it will be created if it doesn't exist
async function main() {
  let rsp = await m3o.analytics.track({
    name: "click",
  });
  console.log(rsp);
}

main();
