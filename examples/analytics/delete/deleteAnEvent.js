// npm install m3o
const { AnalyticsService } = require("m3o/analytics");

const analyticsService = new AnalyticsService(process.env.M3O_API_TOKEN);

// Delete an event
async function deleteAnEvent() {
  const rsp = await analyticsService.delete({
    name: "click",
  });
  console.log(rsp);
}

deleteAnEvent();
