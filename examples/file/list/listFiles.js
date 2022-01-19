// npm install m3o
const { FileService } = require("m3o/file");

const fileService = new FileService(process.env.M3O_API_TOKEN);

// List files by their project and optionally a path.
async function listFiles() {
  const rsp = await fileService.list({
    project: "examples",
  });
  console.log(rsp);
}

listFiles();
