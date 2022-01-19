// npm install m3o
const { RoutingService } = require("m3o/routing");

const routingService = new RoutingService(process.env.M3O_API_TOKEN);

// Get the eta for a route from origin to destination. The eta is an estimated time based on car routes
async function etaFromPointAtoPointB() {
  const rsp = await routingService.eta({
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

etaFromPointAtoPointB();
