module.exports = (client, player) => {
    const channel = client.channels.cache.get(player.textChannel);

    channel.send({ content: 'ตัดการเชื่อมต่อแล้ว' });
}