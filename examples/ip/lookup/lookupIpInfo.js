const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ip.lookup({
    ip: '93.148.214.31'
  })
  console.log(rsp)
}

main()
