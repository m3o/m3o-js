// npm install m3o
const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// Return a list of supported runtimes
async function listRuntimes() {
  const rsp = await functionService.runtimes({});
  console.log(rsp);
}

listRuntimes();
