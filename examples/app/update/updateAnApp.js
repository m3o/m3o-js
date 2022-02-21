// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Update the app. The latest source code will be downloaded, built and deployed.
async function updateAnApp() {
  const rsp = await appService.update({
    name: "helloworld",
  });
  console.log(rsp);
}

updateAnApp();
