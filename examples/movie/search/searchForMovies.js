const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.movie.search({
    language: "en-US",
    page: 1,
    primary_release_year: 2010,
    query: "inception",
    region: "US",
    year: 2010,
  });
  console.log(rsp);
}

main();
