// npm install m3o
const { Emoji } = require("m3o/emoji");

const emojiService = new Emoji(process.env.M3O_API_TOKEN);

// Find an emoji by its alias e.g :beer:
async function findEmoji() {
  const rsp = await emojiService.find({
    alias: ":beer:",
  });
  console.log(rsp);
}

findEmoji();
