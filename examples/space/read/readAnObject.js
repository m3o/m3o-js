const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Read an object in space. Use for private objects.
async function readAnObject() {
  const rsp = await spaceService.read({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

readAnObject();
