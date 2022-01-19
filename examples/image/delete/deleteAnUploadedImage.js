// npm install m3o
const { ImageService } = require("m3o/image");

const imageService = new ImageService(process.env.M3O_API_TOKEN);

// Delete an image previously uploaded.
async function deleteAnUploadedImage() {
  const rsp = await imageService.delete({
    url: "https://cdn.m3ocontent.com/micro/images/micro/41e23b39-48dd-42b6-9738-79a313414bb8/cat.png",
  });
  console.log(rsp);
}

deleteAnUploadedImage();
