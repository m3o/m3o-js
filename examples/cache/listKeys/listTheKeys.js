// npm install m3o
const { Cache } = require("m3o/cache");

const cacheService = new Cache(process.env.M3O_API_TOKEN);

// List all the available keys
async function listTheKeys() {
  const rsp = await cacheService.listKeys({});
  console.log(rsp);
}

listTheKeys();
