const { AppService } = require("m3o/app");

const appService = new AppService(process.env.M3O_API_TOKEN);

// Run an app
async function runAnApp() {
  const rsp = await appService.run({
    branch: "master",
    name: "helloworld",
    port: 8080,
    region: "eu-west-1",
    repo: "github.com/asim/helloworld",
  });
  console.log(rsp);
}

runAnApp();
