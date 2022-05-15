require('dotenv/config')
const { Client, Intents } = require('discord.js')

const client = new Client({
    intents: new Intents( 32767 ),
    shards: 'auto'
})

client.login(process.env.TOKEN);

client.on('ready', () => {
    console.log(`${client.user.tag} has ready`)
})