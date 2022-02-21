// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Resolve an app by id to its raw backend endpoint
async function resolveAppById() {
  const rsp = await appService.resolve({
    id: "helloworld",
  });
  console.log(rsp);
}

resolveAppById();
