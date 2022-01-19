// npm install m3o
const { AppService } = require("m3o/app");

const appService = new AppService(process.env.M3O_API_TOKEN);

// Run an app from a source repo. Specify region etc.
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
