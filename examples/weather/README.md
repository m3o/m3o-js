# Weather

An [m3o.com](https://m3o.com) API. For example usage see [m3o.com/Weather/api](https://m3o.com/Weather/api).

Endpoints:

## Forecast

Get the weather forecast for the next 1-10 days


[https://m3o.com/weather/api#Forecast](https://m3o.com/weather/api#Forecast)

```js
const { WeatherService } = require('m3o/weather');

const weatherService = new WeatherService(process.env.M3O_API_TOKEN)

// Get the weather forecast for the next 1-10 days
async function forecastWeather() {
	const rsp = await weatherService.forecast({
  "days": 2,
  "location": "London"
})
	console.log(rsp)
	
}

forecastWeather()
```
## Now

Get the current weather report for a location by postcode, city, zip code, ip address


[https://m3o.com/weather/api#Now](https://m3o.com/weather/api#Now)

```js
const { WeatherService } = require('m3o/weather');

const weatherService = new WeatherService(process.env.M3O_API_TOKEN)

// Get the current weather report for a location by postcode, city, zip code, ip address
async function getCurrentWeather() {
	const rsp = await weatherService.now({
  "location": "london"
})
	console.log(rsp)
	
}

getCurrentWeather()
```
