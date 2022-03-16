const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search for tweets with a simple query
async function main() {
  let rsp = await m3o.twitter.search({
    query: "cats",
  });
  console.log(rsp);
}

main();
