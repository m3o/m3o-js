// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Get the status of an app
async function getTheStatusOfAnApp() {
  const rsp = await appService.status({
    name: "helloworld",
  });
  console.log(rsp);
}

getTheStatusOfAnApp();
