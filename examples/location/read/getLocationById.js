const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read an entity by its ID
async function main() {
  let rsp = await m3o.location.read({
    id: "1",
  });
  console.log(rsp);
}

main();
