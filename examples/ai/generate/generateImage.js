const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ai.generate({
    text: 'a cat on a ball'
  })
  console.log(rsp)
}

main()
