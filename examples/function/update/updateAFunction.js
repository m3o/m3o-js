const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Update a function. Downloads the source, builds and redeploys
async function main() {
  let rsp = await m3o.function.update({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
