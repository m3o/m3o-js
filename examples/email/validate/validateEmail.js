const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Validate an email address format
async function main() {
  let rsp = await m3o.email.validate({
    address: "joe@example.com",
  });
  console.log(rsp);
}

main();
