const { RoutingService } = require("m3o/routing");

// Retrieve a route as a simple list of gps points along with total distance and estimated duration
async function gpsPointsForAroute() {
  let routingService = new RoutingService(process.env.M3O_API_TOKEN);
  let rsp = await routingService.route({
    destination: {
      latitude: 52.529407,
      longitude: 13.397634,
    },
    origin: {
      latitude: 52.517037,
      longitude: 13.38886,
    },
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

gpsPointsForAroute();
