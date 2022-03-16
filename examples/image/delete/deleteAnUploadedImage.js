const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.image.delete({
    url: "https://cdn.m3ocontent.com/micro/images/micro/41e23b39-48dd-42b6-9738-79a313414bb8/cat.png",
  });
  console.log(rsp);
}

main();
