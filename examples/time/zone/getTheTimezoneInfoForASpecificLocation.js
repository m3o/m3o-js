// npm install m3o
const { Time } = require("m3o/time");

const timeService = new Time(process.env.M3O_API_TOKEN);

// Get the timezone info for a specific location
async function getTheTimezoneInfoForAspecificLocation() {
  const rsp = await timeService.zone({
    location: "London",
  });
  console.log(rsp);
}

getTheTimezoneInfoForAspecificLocation();
