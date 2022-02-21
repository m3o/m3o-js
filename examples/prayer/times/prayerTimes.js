// npm install m3o
const { PrayerService } = require("m3o/prayer");

const prayerService = new PrayerService(process.env.M3O_API_TOKEN);

// Get the prayer (salah) times for a location on a given date
async function prayerTimes() {
  const rsp = await prayerService.times({
    location: "london",
  });
  console.log(rsp);
}

prayerTimes();
