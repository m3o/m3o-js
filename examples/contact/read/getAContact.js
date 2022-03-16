const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Read contact details
async function main() {
  let rsp = await m3o.contact.read({
    id: "42e48a3c-6221-11ec-96d2-acde48001122",
  });
  console.log(rsp);
}

main();
