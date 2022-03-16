// npm install m3o
const { AnalyticsService } = require("m3o/analytics");

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN);

// Track an event, it will be created if it doesn't exist
async function trackAnEvent() {
  const rsp = await analyticsService.track({
    name: "click",
  });
  console.log(rsp);
}

trackAnEvent();
