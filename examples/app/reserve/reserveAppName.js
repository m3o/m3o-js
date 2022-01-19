// npm install m3o
const { AppService } = require("m3o/app");

const appService = new AppService(process.env.M3O_API_TOKEN);

// Reserve apps beyond the free quota. Call Run after.
async function reserveAppName() {
  const rsp = await appService.reserve({
    name: "helloworld",
  });
  console.log(rsp);
}

reserveAppName();
