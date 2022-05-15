module.exports = (client) => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] ${client.user.tag} (${client.shard.ids}) has ready`)

    client.manager.init(client.user.id);
}