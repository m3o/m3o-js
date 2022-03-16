const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Ask a question and receive an instant answer
async function main() {
  let rsp = await m3o.answer.question({
    query: "microsoft",
  });
  console.log(rsp);
}

main();
