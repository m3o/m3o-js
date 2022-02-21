// npm install m3o
const { Contact } = require("m3o/contact");

const contactService = new Contact(process.env.M3O_API_TOKEN);

//
async function listContactsWithSpecificOffsetAndLimit() {
  const rsp = await contactService.list({
    limit: 1,
    offset: 1,
  });
  console.log(rsp);
}

listContactsWithSpecificOffsetAndLimit();
