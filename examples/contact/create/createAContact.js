const m3o = require("m3o")(process.env.M3O_API_TOKEN);

async function main() {
  let rsp = await m3o.contact.create({
    addresses: [
      {
        label: "company address",
        location: "123 street address",
      },
    ],
    birthday: "1995-01-01",
    emails: [
      {
        address: "home@example.com",
        label: "home",
      },
      {
        address: "work@example.com",
        label: "work",
      },
    ],
    links: [
      {
        label: "blog",
        url: "https://blog.joe.me",
      },
    ],
    name: "joe",
    note: "this person is very important",
    phones: [
      {
        label: "home",
        number: "010-12345678",
      },
      {
        label: "work",
        number: "010-87654321",
      },
    ],
    social_medias: [
      {
        label: "twitter",
        username: "joe-twitter",
      },
      {
        label: "facebook",
        username: "joe-facebook",
      },
    ],
  });
  console.log(rsp);
}

main();
