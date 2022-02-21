// npm install m3o
const { RoutingService } = require("m3o/routing");

const routingService = new RoutingService(process.env.M3O_API_TOKEN);

// Turn by turn directions from a start point to an end point including maneuvers and bearings
async function turnByTurnDirections() {
  const rsp = await routingService.directions({
    destination: {
      latitude: 52.529407,
      longitude: 13.397634,
    },
    origin: {
      latitude: 52.517037,
      longitude: 13.38886,
    },
  });
  console.log(rsp);
}

turnByTurnDirections();
