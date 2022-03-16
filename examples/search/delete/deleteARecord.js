const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Delete a record given its ID
async function main() {
  let rsp = await m3o.search.delete({
    id: "1234",
    index: "customers",
  });
  console.log(rsp);
}

main();
