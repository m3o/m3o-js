const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Update a comment
async function main() {
  let rsp = await m3o.comments.update({
    comment: {
      id: "63c0cdf8-2121-11ec-a881-0242e36f037a",
      subject: "Update Comment",
      text: "Updated comment text",
    },
  });
  console.log(rsp);
}

main();
