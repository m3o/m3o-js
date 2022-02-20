// npm install m3o
const { MemeService } = require("m3o/meme");

const memeService = new MemeService(process.env.M3O_API_TOKEN);

// List the available templates
async function memeTemplates() {
  const rsp = await memeService.templates({});
  console.log(rsp);
}

memeTemplates();
