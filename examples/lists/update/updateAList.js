const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.lists.update({
    list: {
      id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
      text: "Updated list text",
      title: "Update List",
    },
  });
  console.log(rsp);
}

main();
