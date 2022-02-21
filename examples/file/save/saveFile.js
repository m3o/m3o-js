// npm install m3o
const { FileService } = require("m3o/file");

const fileService = new FileService(process.env.M3O_API_TOKEN);

// Save a file
async function saveFile() {
  const rsp = await fileService.save({
    file: {
      content: "file content example",
      path: "/document/text-files/file.txt",
      project: "examples",
    },
  });
  console.log(rsp);
}

saveFile();
