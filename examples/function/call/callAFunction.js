const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Call a function by name
async function main() {
  let rsp = await m3o.function.call({
    name: "helloworld",
    request: {
      name: "Alice",
    },
  });
  console.log(rsp);
}

main();
