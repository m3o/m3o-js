// npm install m3o
const { SpaceService } = require("m3o/space");

const spaceService = new SpaceService(process.env.M3O_API_TOKEN);

// Upload a large object (> 10MB). Returns a time limited presigned URL to be used for uploading the object
async function uploadAnObject() {
  const rsp = await spaceService.upload({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

uploadAnObject();
