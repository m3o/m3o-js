// npm install m3o
const { Cache } = require("m3o/cache");

const cacheService = new Cache(process.env.M3O_API_TOKEN);

// Increment a value (if it's a number). If key not found it is equivalent to set.
async function incrementAvalue() {
  const rsp = await cacheService.increment({
    key: "counter",
    value: 2,
  });
  console.log(rsp);
}

incrementAvalue();
