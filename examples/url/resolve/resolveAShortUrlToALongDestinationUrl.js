const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.url.resolve({
    shortURL: 'https://m3o.one/url/ck6SGVkYp'
  })
  console.log(rsp)
}

main()
