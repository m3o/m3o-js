// npm install m3o
const { HolidaysService } = require("m3o/holidays");

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

// Get the list of countries that are supported by this API
async function listCountries() {
  const rsp = await holidaysService.countries({});
  console.log(rsp);
}

listCountries();
