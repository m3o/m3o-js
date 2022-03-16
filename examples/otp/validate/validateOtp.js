const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.otp.validate({
    code: "656211",
    id: "asim@example.com",
  });
  console.log(rsp);
}

main();
