const { ContactService } = require("m3o/contact");

const contactService = new ContactService(process.env.M3O_API_TOKEN);

//
async function deleteAcontact() {
  const rsp = await contactService.delete({
    id: "42e48a3c-6221-11ec-96d2-acde48001122",
  });
  console.log(rsp);
}

deleteAcontact();