// npm install m3o
const { HolidaysService } = require("m3o/holidays");

const holidaysService = new HolidaysService(process.env.M3O_API_TOKEN);

// List the holiday dates for a given country and year
async function getHolidays() {
  const rsp = await holidaysService.list({
    country_code: "GB",
    year: 2022,
  });
  console.log(rsp);
}

getHolidays();
