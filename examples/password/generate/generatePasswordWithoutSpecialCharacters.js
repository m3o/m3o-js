const m3o = require("m3o")(process.env.M3O_API_TOKEN);

// Generate a strong random password. Use the switches to control which character types are included, defaults to using all of them
async function main() {
  let rsp = await m3o.password.generate({
    length: 16,
    lowercase: true,
    numbers: true,
    special: false,
    uppercase: true,
  });
  console.log(rsp);
}

main();
