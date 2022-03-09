// npm install m3o
const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

// Get a collection by its slug
async function getAsingleCollection() {
  const rsp = await nftService.collection({
    slug: "doodles-official",
  });
  console.log(rsp);
}

getAsingleCollection();
