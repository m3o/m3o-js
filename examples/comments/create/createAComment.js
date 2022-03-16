const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.comments.create({
    text: "This is my comment",
    title: "New Comment",
  });
  console.log(rsp);
}

main();
