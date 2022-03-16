const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Create a new note
async function main() {
  let rsp = await m3o.notes.create({
    text: "This is my note",
    title: "New Note",
  });
  console.log(rsp);
}

main();
