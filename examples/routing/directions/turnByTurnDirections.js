const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Turn by turn directions from a start point to an end point including maneuvers and bearings
async function main() {
  let rsp = await m3o.routing.directions({
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
