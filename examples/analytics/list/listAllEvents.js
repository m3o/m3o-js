// npm install m3o
const { AnalyticsService } = require("m3o/analytics");

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN);

// List all events
async function listAllEvents() {
  const rsp = await analyticsService.list({});
  console.log(rsp);
}

listAllEvents();
