module.exports = {
    name: 'shuffle',
    execute(client, message, args) {

        if (!message.member.voice.channel) return
        if (
            message.guild.me.voice.channel &&
            message.member.voice.channel.id !== message.guild.me.voice.channel.id
        ) return
        const player = client.manager.players.get(message.guild.id)

        player.queue.shuffle();

        message.channel.send({ content: 'shuffle แล้ว' })
    }
}