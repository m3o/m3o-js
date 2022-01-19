// npm install m3o
const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

// Create your own NFT (coming soon)
async function createAnNft() {
  const rsp = await nftService.create({
    description: "The epic monkey island character",
    name: "Guybrush Threepwood",
  });
  console.log(rsp);
}

createAnNft();
