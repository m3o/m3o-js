const { TranslateService } = require("m3o/translate");

const translateService = new TranslateService(process.env.M3O_API_TOKEN);

// TextRequest is the basic edition request
async function translateString() {
  const rsp = await translateService.text({
    contents: ["pen", "pencil"],
    format: "text",
    model: "nmt",
    source: "en",
    target: "zh",
  });
  console.log(rsp);
}

translateString();
