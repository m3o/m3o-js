const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Upload a large object (> 10MB). Returns a time limited presigned URL to be used for uploading the object
async function main() {
  let rsp = await m3o.space.upload({
    name: "images/file.jpg",
  });
  console.log(rsp);
}

main();
