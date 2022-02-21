// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Run an app from source
async function runAnApp() {
  const rsp = await appService.run({
    branch: "master",
    name: "helloworld",
    port: 8080,
    region: "europe-west1",
    repo: "github.com/asim/helloworld",
  });
  console.log(rsp);
}

runAnApp();
