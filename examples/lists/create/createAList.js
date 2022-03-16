const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.lists.create({
    text: "This is my list",
    title: "New List",
  });
  console.log(rsp);
}

main();
