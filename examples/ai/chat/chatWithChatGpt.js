const m3o = require('m3o').default(process.env.M3O_API_TOKEN)

async function main() {
  let rsp = await m3o.ai.chat({
    context: [
      {
        prompt: 'who is leonardo davinci',
        reply:
          "Leonardo da Vinci was an Italian polymath during the Renaissance period. He was born in 1452 in Vinci, Italy, and is renowned for his contributions to various fields such as science, engineering, art, and anatomy. Da Vinci's most famous works include the Mona Lisa and The Last Supper. He is often considered one of the greatest artists and thinkers of all time."
      },
      {
        prompt: 'where is he from?',
        reply: 'Leonardo da Vinci was from Vinci, a town in Tuscany, Italy.'
      }
    ],
    model: 'gpt-3.5-turbo',
    prompt: 'when did he die?'
  })
  console.log(rsp)
}

main()
