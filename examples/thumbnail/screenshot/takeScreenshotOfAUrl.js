const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create a thumbnail screenshot by passing in a url, height and width
async function main() {
  let rsp = await m3o.thumbnail.screenshot({
    height: 600,
    url: "https://google.com",
    width: 600,
  });
  console.log(rsp);
}

main();
