const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.notes.read({
    id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
  });
  console.log(rsp);
}

main();
