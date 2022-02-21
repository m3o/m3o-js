// npm install m3o
const { Space } = require("m3o/space");

const spaceService = new Space(process.env.M3O_API_TOKEN);

// Create an object. Returns error if object with this name already exists. Max object size of 10MB, see Upload endpoint for larger objects. If you want to update an existing object use the `Update` endpoint
async function createAnObject() {
  const rsp = await spaceService.create({
    name: "images/file.jpg",
    object: "\u003cfile bytes\u003e",
    visibility: "public",
  });
  console.log(rsp);
}

createAnObject();
