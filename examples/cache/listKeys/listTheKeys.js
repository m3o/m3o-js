// npm install m3o
const { CacheService } = require("m3o/cache");

const cacheService = new CacheService(process.env.M3O_API_TOKEN);

// List all the available keys
async function listTheKeys() {
  const rsp = await cacheService.listKeys({});
  console.log(rsp);
}

listTheKeys();
