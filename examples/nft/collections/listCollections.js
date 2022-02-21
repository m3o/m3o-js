// npm install m3o
const { Nft } = require("m3o/nft");

const nftService = new Nft(process.env.M3O_API_TOKEN);

// Get a list of collections
async function listCollections() {
  const rsp = await nftService.collections({
    limit: 1,
  });
  console.log(rsp);
}

listCollections();
