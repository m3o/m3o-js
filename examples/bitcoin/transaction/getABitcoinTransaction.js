const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.bitcoin.transaction({
    hash: "f854aebae95150b379cc1187d848d58225f3c4157fe992bcd166f58bd5063449",
  });
  console.log(rsp);
}

main();
