// npm install m3o
const { Id } = require("m3o/id");

const idService = new Id(process.env.M3O_API_TOKEN);

// Generate a unique ID. Defaults to uuid.
async function generateAshortId() {
  const rsp = await idService.generate({
    type: "shortid",
  });
  console.log(rsp);
}

generateAshortId();
