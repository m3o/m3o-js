const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Index a record i.e. insert a document to search for.
async function main() {
  let rsp = await m3o.search.index({
    data: {
      age: 37,
      name: "John Doe",
      starsign: "Leo",
    },
    index: "customers",
  });
  console.log(rsp);
}

main();
