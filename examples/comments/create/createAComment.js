const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.comments.create({
    subject: "New Comment",
    text: "This is my comment",
  });
  console.log(rsp);
}

main();
