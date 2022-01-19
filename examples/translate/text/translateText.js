// npm install m3o
const { TranslateService } = require("m3o/translate");

const translateService = new TranslateService(process.env.M3O_API_TOKEN);

// Basic text translation
async function translateText() {
  const rsp = await translateService.text({
    content: "hello",
    format: "text",
    model: "nmt",
    source: "en",
    target: "fr",
  });
  console.log(rsp);
}

translateText();
