const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.crypto.price({
    symbol: 'BTCUSD'
  })
  console.log(rsp)
}

main()
