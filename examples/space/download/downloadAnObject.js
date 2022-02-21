// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Download an object via a presigned url
async function downloadAnObject() {
  const rsp = await spaceService.download({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

downloadAnObject();
