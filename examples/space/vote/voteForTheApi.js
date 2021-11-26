const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Vote to have the Space api launched faster!
async function voteForTheApi() {
  const rsp = await spaceService.vote({
    message: "Launch it!",
  });
  console.log(rsp);
}

voteForTheApi();
