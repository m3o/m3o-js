// npm install m3o
const { App } = require("m3o/app");

const appService = new App(process.env.M3O_API_TOKEN);

// Delete an app
async function deleteAnApp() {
  const rsp = await appService.delete({
    name: "helloworld",
  });
  console.log(rsp);
}

deleteAnApp();
