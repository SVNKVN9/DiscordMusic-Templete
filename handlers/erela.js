const { Manager } = require("erela.js");
const Spotify = require("erela.js-spotify");
const AppleMusic = require("erela.js-apple");
const Deezer = require("erela.js-deezer");
const Facebook = require("erela.js-facebook");

module.exports = (client) => {
    client.manager = new Manager({
        nodes: client.config.nodes,
        plugins: [
            new Spotify({
                clientID: process.env.Spotify_clientId,
                clientSecret: process.env.Spotify_clientSecret
            }),
            new AppleMusic(),
            new Deezer(),
            new Facebook()
        ],
        send(id, payload) {
            const guild = client.guilds.cache.get(id);
            if (guild) guild.shard.send(payload);
        },
    })
}