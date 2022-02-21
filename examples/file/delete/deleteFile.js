// npm install m3o
const { FileService } = require("m3o/file");

const fileService = new FileService(process.env.M3O_API_TOKEN);

// Delete a file by project name/path
async function deleteFile() {
  const rsp = await fileService.delete({
    path: "/document/text-files/file.txt",
    project: "examples",
  });
  console.log(rsp);
}

deleteFile();
