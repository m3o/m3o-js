const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search for videos on YouTube
async function main() {
  let rsp = await m3o.youtube.search({
    query: "donuts",
  });
  console.log(rsp);
}

main();
