const { readdirSync } = require('fs')

module.exports = (client) => {
    const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'))
    for(let file of commandFiles) {
        const cmd = require(`../commands/${file}`)
        client.commands.set(cmd.name, cmd)
        if(cmd.aliases) cmd.aliases.forEach(a => client.aliases.set(a, cmd.name))
        console.log(`Command ${cmd.name} Loaded`)
    }
}