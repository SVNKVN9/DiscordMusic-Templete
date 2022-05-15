require('dotenv/config')
const { Client, Intents, Collection } = require('discord.js')
const { readdirSync } = require('fs')

const client = new Client({
    intents: new Intents( 32767 ),
    shards: 'auto'
})

client.login(process.env.TOKEN);
client.commands = new Collection()
client.aliases = new Collection()
client.config = require('./config.json')

const handlerFiles = readdirSync('./handlers').filter(file => file.endsWith('.js'))
for(let file of handlerFiles) {
    require(`./handlers/${file}`)(client)
}