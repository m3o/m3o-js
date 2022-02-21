// npm install m3o
const { MemegenService } = require("m3o/memegen");

const memegenService = new MemegenService(process.env.M3O_API_TOKEN);

// List the available templates
async function memeTemplates() {
  const rsp = await memegenService.templates({});
  console.log(rsp);
}

memeTemplates();
