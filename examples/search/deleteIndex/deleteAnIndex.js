const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete an index by name
async function main() {
  let rsp = await m3o.search.deleteIndex({
    index: "customers",
  });
  console.log(rsp);
}

main();
