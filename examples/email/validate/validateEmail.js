const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.email.validate({
    address: 'joe@example.com'
  })
  console.log(rsp)
}

main()
