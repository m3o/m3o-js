// npm install m3o
const { EmojiService } = require("m3o/emoji");

const emojiService = new EmojiService(process.env.M3O_API_TOKEN);

// Get the flag for a country. Requires country code e.g GB for great britain
async function getFlagByCountryCode() {
  const rsp = await emojiService.flag({
    alias: "GB",
  });
  console.log(rsp);
}

getFlagByCountryCode();
