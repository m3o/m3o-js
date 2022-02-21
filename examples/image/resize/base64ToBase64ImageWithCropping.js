// npm install m3o
const { Image } = require("m3o/image");

const imageService = new Image(process.env.M3O_API_TOKEN);

// Resize an image on the fly without storing it (by sending and receiving a base64 encoded image), or resize and upload depending on parameters.
// If one of width or height is 0, the image aspect ratio is preserved.
// Optional cropping.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function base64toBase64imageWithCropping() {
  const rsp = await imageService.resize({
    base64:
      "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",
    cropOptions: {
      height: 50,
      width: 50,
    },
    height: 100,
    width: 100,
  });
  console.log(rsp);
}

base64toBase64imageWithCropping();
