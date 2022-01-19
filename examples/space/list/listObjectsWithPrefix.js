// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// List the objects in space
async function listObjectsWithPrefix() {
  const rsp = await spaceService.list({
    prefix: "images/",
  });
  console.log(rsp);
}

listObjectsWithPrefix();
