const { ContactService } = require("m3o/contact");

const contactService = new ContactService(process.env.M3O_API_TOKEN);

//
async function createAcontact() {
  const rsp = await contactService.create({
    addresses: [
      {
        address: "https://company.of.joe.com",
        label: "company address",
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
