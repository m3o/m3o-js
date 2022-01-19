// npm install m3o
const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

// Get a list of collections
async function listCollections() {
  const rsp = await nftService.collections({
    limit: 1,
  });
  console.log(rsp);
}

listCollections();
