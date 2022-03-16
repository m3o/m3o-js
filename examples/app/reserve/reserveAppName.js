const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Reserve apps beyond the free quota. Call Run after.
async function main() {
  let rsp = await m3o.app.reserve({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
