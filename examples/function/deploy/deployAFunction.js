const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.function.deploy({
    branch: "main",
    entrypoint: "Helloworld",
    name: "helloworld",
    region: "europe-west1",
    repo: "https://github.com/m3o/m3o",
    runtime: "go116",
    subfolder: "examples/go-function",
  });
  console.log(rsp);
}

main();
