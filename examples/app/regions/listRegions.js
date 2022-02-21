// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Return the support regions
async function listRegions() {
  const rsp = await appService.regions({});
  console.log(rsp);
}

listRegions();
