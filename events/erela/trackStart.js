module.exports = async (client, player, track) => {
    const channel = client.channels.cache.get(player.textChannel);

    channel.send({ content: `กำลังเล่น: \`${track.title}\`, ขอเพลงโดย \`${track.requester.tag}\`.` });
}