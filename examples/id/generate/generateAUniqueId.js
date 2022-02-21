// npm install m3o
const { Id } = require("m3o/id");

const idService = new Id(process.env.M3O_API_TOKEN);

// Generate a unique ID. Defaults to uuid.
async function generateAuniqueId() {
  const rsp = await idService.generate({
    type: "uuid",
  });
  console.log(rsp);
}

generateAuniqueId();
