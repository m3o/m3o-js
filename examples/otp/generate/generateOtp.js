const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.otp.generate({
    id: 'asim@example.com'
  })
  console.log(rsp)
}

main()
