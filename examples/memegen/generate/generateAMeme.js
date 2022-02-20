// npm install m3o
const { MemegenService } = require("m3o/memegen");

const memegenService = new MemegenService(process.env.M3O_API_TOKEN);

//
async function generateAmeme() {
  const rsp = await memegenService.generate({
    bottom_text: "Huh?",
    id: "444501",
    top_text: "WTF",
  });
  console.log(rsp);
}

generateAmeme();
