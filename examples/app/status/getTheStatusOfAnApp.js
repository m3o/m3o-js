const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get the status of an app
async function main() {
  let rsp = await m3o.app.status({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
