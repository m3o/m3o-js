const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.cron.delete({
    id: '0c8cf9f7-3a61-4e91-b249-00a970044c95'
  })
  console.log(rsp)
}

main()
