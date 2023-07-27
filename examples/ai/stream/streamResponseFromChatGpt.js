const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ai.stream({
    model: 'gpt-3.5-turbo',
    prompt: 'write helloworld in node.js'
  })
  rsp.onMessage((msg) => {
    console.log(msg)
  })
}

main()
