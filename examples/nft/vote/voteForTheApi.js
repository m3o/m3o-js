const { NftService } = require("m3o/nft");

const nftService = new NftService(process.env.M3O_API_TOKEN);

// Vote to have the NFT api launched faster!
async function voteForTheApi() {
  const rsp = await nftService.vote({
    message: "Launch it!",
  });
  console.log(rsp);
}

voteForTheApi();
