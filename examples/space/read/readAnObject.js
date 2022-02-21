// npm install m3o
const { Space } = require("m3o/space");

const spaceService = new Space(process.env.M3O_API_TOKEN);

// Read an object in space
async function readAnObject() {
  const rsp = await spaceService.read({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

readAnObject();
