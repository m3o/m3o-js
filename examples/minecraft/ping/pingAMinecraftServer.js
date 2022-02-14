// npm install m3o
const { MinecraftService } = require("m3o/minecraft");

const minecraftService = new MinecraftService(process.env.M3O_API_TOKEN);

// Ping a minecraft server
async function pingAminecraftServer() {
  const rsp = await minecraftService.ping({
    address: "funcraft.net",
  });
  console.log(rsp);
}

pingAminecraftServer();
