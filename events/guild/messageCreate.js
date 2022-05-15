module.exports = (client, message) => {
    if (!message.guild) return
    if (message.author.bot) return

    if (!message.content.startsWith(client.config.prefix)) return

    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/)
    const commandName = args.shift().toLowerCase()

    const command = client.commands.get(commandName) || client.commands.get(client.aliases.get(commandName))

    if (!command) return

    command.execute(client, message, args)
}