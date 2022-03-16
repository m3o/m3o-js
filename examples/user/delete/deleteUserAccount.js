const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.user.delete({
    id: "8b98acbe-0b6a-4d66-a414-5ffbf666786f",
  });
  console.log(rsp);
}

main();
