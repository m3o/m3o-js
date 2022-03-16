const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search for videos on Google
async function main() {
  let rsp = await m3o.google.search({
    query: "how to make donuts",
  });
  console.log(rsp);
}

main();
