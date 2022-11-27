module.exports.run = (client, message, args) => {
    message.channel.send(`🏓 Pong : \`${Math.floor(message.client.ws.ping)}ms\``)
}