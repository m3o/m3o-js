// npm install m3o
const { AnalyticsService } = require("m3o/analytics");

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN);

// Get a single event
async function readAnEvent() {
  const rsp = await analyticsService.read({
    name: "click",
  });
  console.log(rsp);
}

readAnEvent();
