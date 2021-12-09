const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Create an object. Returns error if object with this name already exists. If you want to update an existing object use the `Update` endpoint
// You need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function createAnObject() {
  const rsp = await spaceService.create({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

createAnObject();
