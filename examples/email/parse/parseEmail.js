const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.email.parse({
    address: "Joe Blogs \u003cjoe@example.com\u003e",
  });
  console.log(rsp);
}

main();
