// npm install m3o
const { FunctionService } = require("m3o/function");

const functionService = new FunctionService(process.env.M3O_API_TOKEN);

// Return a list of supported regions
async function listRegions() {
  const rsp = await functionService.regions({});
  console.log(rsp);
}

listRegions();
