// npm install m3o
const { WeatherService } = require("m3o/weather");

const weatherService = new WeatherService(process.env.M3O_API_TOKEN);

// Get the current weather report for a location by postcode, city, zip code, ip address
async function getCurrentWeather() {
  const rsp = await weatherService.now({
    location: "london",
  });
  console.log(rsp);
}

getCurrentWeather();
