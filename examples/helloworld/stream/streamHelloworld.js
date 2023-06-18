const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.helloworld.stream({
    messages: 10,
    name: 'John'
  })
  rsp.onMessage((msg) => {
    console.log(msg)
  })
}

main()
