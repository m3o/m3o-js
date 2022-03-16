const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Update the app. The latest source code will be downloaded, built and deployed.
async function main() {
  let rsp = await m3o.app.update({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
