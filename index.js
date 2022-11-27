require('dotenv').config()
const fs = require('node:fs');
const path = require('node:path');
const Discord = require("discord.js")
const { Client, GatewayIntentBits, EmbedBuilder, Collection, DiscordAPIError } = require('discord.js');
const prefix = process.env.prefix;

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,]
});
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"))
for (file of commands) {
    const commandName = file.split(".")[0]
    const command = require(`./commands/${commandName}`)
    client.commands.set(commandName, command)
  }
 

client.once("ready", async () => {
    console.log(`Logged In As ${client.user.tag}\nReady to shorten some links baby!!!`)
})

client.on("messageCreate", message => {
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const commandName = args.shift()
        const command = client.commands.get(commandName)
        if(!command) return
        command.run(client, message, args)
    }
})


client.login(process.env.token)