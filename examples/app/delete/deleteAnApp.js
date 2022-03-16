const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete an app
async function main() {
  let rsp = await m3o.app.delete({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
