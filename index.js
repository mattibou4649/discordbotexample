const Discord = require('discord.js')
const client = new Discord.Client()
require('dotenv').config();

const discordToken = process.env.TOKEN

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async msg => {
  if (msg.content === '!ping') {
    msg.channel.send('Pong!')
  }
})

client.login(discordToken)