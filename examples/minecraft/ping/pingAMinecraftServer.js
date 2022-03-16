const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Ping a minecraft server
async function main() {
  let rsp = await m3o.minecraft.ping({
    address: "funcraft.net",
  });
  console.log(rsp);
}

main();
