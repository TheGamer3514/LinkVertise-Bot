require('dotenv').config()
const load_slash_commands = require('./deploy-commands.js')
const fs = require('node:fs');
const path = require('node:path');
const Discord = require("discord.js")
const { Client, GatewayIntentBits, EmbedBuilder, Collection, DiscordAPIError, ActionRowBuilder, Events } = require('discord.js');
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
 
const slashcommandsPath = path.join(__dirname, 'slashcommands');
const slashcommandFiles = fs.readdirSync(slashcommandsPath).filter(file => file.endsWith('.js'));

for (const file of slashcommandFiles) {
	const filePath = path.join(slashcommandsPath, file);
	const command = require(filePath);
	if ('data' in command && 'execute' in command) {
		client.commands.set(command.data.name, command);
	} else {
		console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
	}
}





  client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(`Error executing ${interaction.commandName}`);
		console.error(error);
	}
});






client.once("ready", async () => {
    console.log(`Logged In As ${client.user.tag}\nReady to shorten some links baby!!!`);
    client.user.setActivity('!help | Shrinking Links', {type: 'PLAYING'});
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