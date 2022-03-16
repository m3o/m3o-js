const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.search.search({
    index: "customers",
    query: "name == 'John' OR name == 'Jane'",
  });
  console.log(rsp);
}

main();
