// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Retrieve meta information about an object
async function headAnObject() {
  const rsp = await spaceService.head({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

headAnObject();
