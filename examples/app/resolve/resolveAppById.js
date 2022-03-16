const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Resolve an app by id to its raw backend endpoint
async function main() {
  let rsp = await m3o.app.resolve({
    id: "helloworld",
  });
  console.log(rsp);
}

main();
