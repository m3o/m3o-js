const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read stored events
async function main() {
  let rsp = await m3o.event.read({
    topic: "user",
  });
  console.log(rsp);
}

main();
