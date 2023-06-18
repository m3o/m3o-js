const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ethereum.broadcast({
    hex: '0xf904808000831cfde080'
  })
  console.log(rsp)
}

main()
