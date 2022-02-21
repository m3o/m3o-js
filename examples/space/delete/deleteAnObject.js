// npm install m3o
const { Space } = require("m3o/space");

const spaceService = new Space(process.env.M3O_API_TOKEN);

// Delete an object from space
async function deleteAnObject() {
  const rsp = await spaceService.delete({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

deleteAnObject();
