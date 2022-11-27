module.exports.run = (client, message, args) => {
    message.channel.send(`🏓 Ping : \`${Math.floor(message.client.ws.ping)}ms\``)
}