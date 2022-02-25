// npm install m3o
const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

//
async function getAsingleCollection() {
  const rsp = await nftService.collection({
    slug: "doodles-official",
  });
  console.log(rsp);
}

getAsingleCollection();
