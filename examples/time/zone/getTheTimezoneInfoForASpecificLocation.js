const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the timezone info for a specific location
async function main() {
  let rsp = await m3o.time.zone({
    location: "London",
  });
  console.log(rsp);
}

main();
