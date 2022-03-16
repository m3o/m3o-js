const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a collection by its slug
async function main() {
  let rsp = await m3o.nft.collection({
    slug: "doodles-official",
  });
  console.log(rsp);
}

main();
