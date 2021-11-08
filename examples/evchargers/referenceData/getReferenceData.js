const { EvchargersService } = require("m3o/evchargers");

// Retrieve reference data as used by this API and in conjunction with the Search endpoint
async function getReferenceData() {
  let evchargersService = new EvchargersService(process.env.M3O_API_TOKEN);
  let rsp = await evchargersService.referenceData({});
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

getReferenceData();
