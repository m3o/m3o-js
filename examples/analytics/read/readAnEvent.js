// npm install m3o
const { AnalyticsService } = require("m3o/analytics");

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN);

// Get a single event
async function readAnEvent() {
  const rsp = await analyticsService.read({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

readAnEvent();
