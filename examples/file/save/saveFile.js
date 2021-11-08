const { FileService } = require("m3o/file");

// Save a file
async function saveFile() {
  let fileService = new FileService(process.env.M3O_API_TOKEN);
  let rsp = await fileService.save({
    file: {
      content: "file content example",
      path: "/document/text-files/file.txt",
      project: "examples",
    },
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

saveFile();
