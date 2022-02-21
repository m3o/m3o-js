// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// List all the deployed functions
async function listFunctions() {
  const rsp = await functionService.list({});
  console.log(rsp);
}

listFunctions();
