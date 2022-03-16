const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create an index by name
async function main() {
  let rsp = await m3o.search.createIndex({
    index: "customers",
  });
  console.log(rsp);
}

main();
