const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.user.read({
    email: 'joe@example.com'
  })
  console.log(rsp)
}

main()
