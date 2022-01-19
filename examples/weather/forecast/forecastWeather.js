// npm install m3o
const { WeatherService } = require("m3o/weather");

const weatherService = new WeatherService(process.env.M3O_API_TOKEN);

// Get the weather forecast for the next 1-10 days
async function forecastWeather() {
  const rsp = await weatherService.forecast({
    days: 2,
    location: "London",
  });
  console.log(rsp);
}

forecastWeather();
