const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Upload an image by either sending a base64 encoded image to this endpoint or a URL.
// To resize an image before uploading, see the Resize endpoint.
// To use the file parameter you need to send the request as a multipart/form-data rather than the usual application/json
// with each parameter as a form field.
async function main() {
  let rsp = await m3o.image.upload({
    name: "cat.jpeg",
    url: "somewebsite.com/cat.png",
  });
  console.log(rsp);
}

main();
