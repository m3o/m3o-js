// npm install m3o
const { MemeService } = require("m3o/meme");

const memeService = new MemeService(process.env.M3O_API_TOKEN);

//
async function generateAmeme() {
  const rsp = await memeService.generate({
    bottom_text: "Huh?",
    id: "444501",
    top_text: "WTF",
  });
  console.log(rsp);
}

generateAmeme();
