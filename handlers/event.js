const { readdirSync } = require('fs')

module.exports = (client) => {
    const clientEvents = readdirSync('./events/client').filter(file => file.endsWith('.js'))
    for(let file of clientEvents) {
        const event = require(`../events/client/${file}`)
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    }

    const guildEvents = readdirSync('./events/guild').filter(file => file.endsWith('.js'))
    for(let file of guildEvents) {
        const event = require(`../events/guild/${file}`)
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    }

    const erelaEvents = readdirSync('./events/erela/').filter(file => file.endsWith('.js'))
    for (const file of erelaEvents) {
        let event = require(`../events/erela/${file}`)
        let eventName = file.split(".")[0];
        client.manager.on(eventName, event.bind(null, client))
    }
}