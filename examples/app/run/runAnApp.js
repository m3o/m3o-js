const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.app.run({
    branch: "master",
    name: "helloworld",
    port: 8080,
    region: "europe-west1",
    repo: "github.com/asim/helloworld",
  });
  console.log(rsp);
}

main();
