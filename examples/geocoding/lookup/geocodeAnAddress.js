// npm install m3o
const { Geocoding } = require("m3o/geocoding");

const geocodingService = new Geocoding(process.env.M3O_API_TOKEN);

// Lookup returns a geocoded address including normalized address and gps coordinates. All fields are optional, provide more to get more accurate results
async function geocodeAnAddress() {
  const rsp = await geocodingService.lookup({
    address: "10 russell st",
    city: "london",
    country: "uk",
    postcode: "wc2b",
  });
  console.log(rsp);
}

geocodeAnAddress();
