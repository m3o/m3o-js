// npm install m3o
const { ImageService } = require("m3o/image");

const imageService = new ImageService(process.env.M3O_API_TOKEN);

// Upload an image by either sending a base64 encoded image to this endpoint or a URL.
// To resize an image before uploading, see the Resize endpoint.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function uploadAnImageFromAurlToMicrosCdn() {
  const rsp = await imageService.upload({
    name: "cat.jpeg",
    url: "somewebsite.com/cat.png",
  });
  console.log(rsp);
}

uploadAnImageFromAurlToMicrosCdn();
