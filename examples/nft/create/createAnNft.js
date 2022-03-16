const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create your own NFT (coming soon)
async function main() {
  let rsp = await m3o.nft.create({
    description: "The epic monkey island character",
    name: "Guybrush Threepwood",
  });
  console.log(rsp);
}

main();
