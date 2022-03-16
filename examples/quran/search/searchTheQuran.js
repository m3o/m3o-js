const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Search the Quran for any form of query or questions
async function main() {
  let rsp = await m3o.quran.search({
    query: "messenger",
  });
  console.log(rsp);
}

main();
