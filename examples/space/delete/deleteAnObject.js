// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Delete an object from space
async function deleteAnObject() {
  const rsp = await spaceService.delete({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

deleteAnObject();
