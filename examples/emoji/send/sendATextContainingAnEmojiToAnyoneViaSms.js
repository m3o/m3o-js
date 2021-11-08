const { EmojiService } = require("m3o/emoji");

// Send an emoji to anyone via SMS. Messages are sent in the form '<message> Sent from <from>'
async function sendAtextContainingAnEmojiToAnyoneViaSms() {
  let emojiService = new EmojiService(process.env.M3O_API_TOKEN);
  let rsp = await emojiService.send({
    from: "Alice",
    message: "let's grab a :beer:",
    to: "+44782669123",
  });
  rsp.onMessage((msg) => {
    console.log(msg);
  });
}

sendAtextContainingAnEmojiToAnyoneViaSms();
