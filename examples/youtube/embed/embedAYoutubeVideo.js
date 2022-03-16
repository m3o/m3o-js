const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.youtube.embed({
    url: "https://www.youtube.com/watch?v=GWRWZu7XsJ0",
  });
  console.log(rsp);
}

main();
