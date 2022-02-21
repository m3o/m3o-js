// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// List all the apps
async function listTheApps() {
  const rsp = await appService.list({});
  console.log(rsp);
}

listTheApps();
