// npm install m3o
const { VehicleService } = require("m3o/vehicle");

const vehicleService = new VehicleService(process.env.M3O_API_TOKEN);

// Lookup a UK vehicle by it's registration number
async function lookupVehicle() {
  const rsp = await vehicleService.lookup({
    registration: "LC60OTA",
  });
  console.log(rsp);
}

lookupVehicle();
