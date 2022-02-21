// npm install m3o
const { Emoji } = require("m3o/emoji");

const emojiService = new Emoji(process.env.M3O_API_TOKEN);

// Print text and renders the emojis with aliases e.g
// let's grab a :beer: becomes let's grab a 🍺
async function printTextIncludingEmoji() {
  const rsp = await emojiService.print({
    text: "let's grab a :beer:",
  });
  console.log(rsp);
}

printTextIncludingEmoji();
