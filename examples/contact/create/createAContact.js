// npm install m3o
const { Contact } = require("m3o/contact");

const contactService = new Contact(process.env.M3O_API_TOKEN);

//
async function createAcontact() {
  const rsp = await contactService.create({
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

createAcontact();
