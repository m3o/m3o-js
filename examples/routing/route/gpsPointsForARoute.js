const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Retrieve a route as a simple list of gps points along with total distance and estimated duration
async function main() {
  let rsp = await m3o.routing.route({
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

main();
