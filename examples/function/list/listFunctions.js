// npm install m3o
const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// List all the deployed functions
async function listFunctions() {
  const rsp = await functionService.list({});
  console.log(rsp);
}

listFunctions();
