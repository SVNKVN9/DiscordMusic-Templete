require('dotenv/config')
const { ShardingManager } = require('discord.js')

const manager = new ShardingManager('./bot.js', {
    token: process.env.TOKEN,
    totalShards: 'auto'
})