const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Get a list of collections
async function main() {
  let rsp = await m3o.nft.collections({
    limit: 1,
  });
  console.log(rsp);
}

main();
