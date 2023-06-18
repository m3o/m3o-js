const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.notes.create({
    text: 'This is my note',
    title: 'New Note'
  })
  console.log(rsp)
}

main()
