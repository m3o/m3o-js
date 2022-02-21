// npm install m3o
const { Memegen } = require("m3o/memegen");

const memegenService = new Memegen(process.env.M3O_API_TOKEN);

// List the available templates
async function memeTemplates() {
  const rsp = await memegenService.templates({});
  console.log(rsp);
}

memeTemplates();
