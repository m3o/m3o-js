// npm install m3o
const { GifsService } = require("m3o/gifs");

const gifsService = new GifsService(process.env.M3O_API_TOKEN);

// Search for a GIF
async function search() {
  const rsp = await gifsService.search({
    limit: 2,
    query: "dogs",
  });
  console.log(rsp);
}

search();
