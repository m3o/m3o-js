// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// Reserve function names and resources beyond free quota
async function reserveAfunction() {
  const rsp = await functionService.reserve({
    name: "helloworld",
  });
  console.log(rsp);
}

reserveAfunction();
