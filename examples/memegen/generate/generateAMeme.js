// npm install m3o
const { Memegen } = require("m3o/memegen");

const memegenService = new Memegen(process.env.M3O_API_TOKEN);

// Generate a meme using a template
async function generateAmeme() {
  const rsp = await memegenService.generate({
    bottom_text: "Huh?",
    id: "444501",
    top_text: "WTF",
  });
  console.log(rsp);
}

generateAmeme();
