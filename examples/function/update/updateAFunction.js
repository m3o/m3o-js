// npm install m3o
const { Function } = require("m3o/function");

const functionService = new Function(process.env.M3O_API_TOKEN);

// Update a function. Downloads the source, builds and redeploys
async function updateAfunction() {
  const rsp = await functionService.update({
    name: "helloworld",
  });
  console.log(rsp);
}

updateAfunction();
