// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Update an object. If an object with this name does not exist, creates a new one.
async function updateAnObject() {
  const rsp = await spaceService.update({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

updateAnObject();
