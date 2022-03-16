const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search for a GIF
async function main() {
  let rsp = await m3o.gifs.search({
    limit: 2,
    query: "dogs",
  });
  console.log(rsp);
}

main();
