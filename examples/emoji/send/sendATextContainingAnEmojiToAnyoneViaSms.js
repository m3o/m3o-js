// npm install m3o
const { EmojiService } = require("m3o/emoji");

const emojiService = new EmojiService(process.env.M3O_API_TOKEN);

// Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'
async function sendAtextContainingAnEmojiToAnyoneViaSms() {
  const rsp = await emojiService.send({
    from: "Alice",
    message: "let's grab a :beer:",
    to: "+44782669123",
  });
  console.log(rsp);
}

sendAtextContainingAnEmojiToAnyoneViaSms();
