const { RoutingService } = require("m3o/routing");

// Turn by turn directions from a start point to an end point including maneuvers and bearings
async function turnByTurnDirections() {
  let routingService = new RoutingService(process.env.M3O_API_TOKEN);
  let rsp = await routingService.directions({
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

turnByTurnDirections();
