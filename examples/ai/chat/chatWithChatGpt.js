const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ai.chat({
    model: 'gpt-3.5-turbo',
    prompt: 'who is leonardo davinci'
  })
  console.log(rsp)
}

main()
