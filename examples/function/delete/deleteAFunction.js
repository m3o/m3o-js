// npm install m3o
const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// Delete a function by name
async function deleteAfunction() {
  const rsp = await functionService.delete({
    name: "helloworld",
  });
  console.log(rsp);
}

deleteAfunction();
