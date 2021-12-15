const { AppService } = require("m3o/app");

const appService = new AppService(process.env.M3O_API_TOKEN);

// Update the app
async function updateAnApp() {
  const rsp = await appService.update({
    name: "helloworld",
  });
  console.log(rsp);
}

updateAnApp();
