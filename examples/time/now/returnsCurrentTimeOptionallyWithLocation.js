// npm install m3o
const { Time } = require("m3o/time");

const timeService = new Time(process.env.M3O_API_TOKEN);

// Get the current time
async function returnsCurrentTimeOptionallyWithLocation() {
  const rsp = await timeService.now({});
  console.log(rsp);
}

returnsCurrentTimeOptionallyWithLocation();
