const { AppService } = require("m3o/app");

const appService = new AppService(process.env.M3O_API_TOKEN);

// Vote to have the App api launched faster!
async function voteForTheApi() {
  const rsp = await appService.vote({
    message: "Launch it!",
  });
  console.log(rsp);
}

voteForTheApi();
