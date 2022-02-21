// npm install m3o
const { Vehicle } = require("m3o/vehicle");

const vehicleService = new Vehicle(process.env.M3O_API_TOKEN);

// Lookup a UK vehicle by it's registration number
async function lookupVehicle() {
  const rsp = await vehicleService.lookup({
    registration: "LC60OTA",
  });
  console.log(rsp);
}

lookupVehicle();
