// npm install m3o
const { Weather } = require("m3o/weather");

const weatherService = new Weather(process.env.M3O_API_TOKEN);

// Get the current weather report for a location by postcode, city, zip code, ip address
async function getCurrentWeather() {
  const rsp = await weatherService.now({
    location: "london",
  });
  console.log(rsp);
}

getCurrentWeather();
