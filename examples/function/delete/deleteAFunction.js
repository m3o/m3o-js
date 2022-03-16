const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete a function by name
async function main() {
  let rsp = await m3o.function.delete({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
