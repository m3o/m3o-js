const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Reserve function names and resources beyond free quota
async function main() {
  let rsp = await m3o.function.reserve({
    name: "helloworld",
  });
  console.log(rsp);
}

main();
