require('dotenv').config()

const { Client, GatewayIntentBits } = require('discord.js');

const Linkvertise = require("./lib/linkvertise")

const linkvertise = new Linkvertise(process.env.linkvertise_id)

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,]
});

client.once("ready", async () => {
    console.log("Ready to shorten some links baby!!!")
})

client.on("messageCreate", (async (message) => {
    if (message.author.bot) return;
    const args = message.content.trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === '!help') {
        message.reply("``!help`` - Show The Help Menu\n``!linkvertise`` - Shorten A Link!");
    }
    if (command === '!linkvertise') {
        let link = args[0];
        if (!link) return message.reply("Please provide a valid link to shorten!");
        message.reply(linkvertise.getLink(link));
    }

}));

client.login(process.env.token)