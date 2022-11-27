require('dotenv').config()
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
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
        const helpEmbed = new EmbedBuilder()
        .setColor(0xE08616)
        .setTitle('Help')
	    .setURL('https://github.com/TheGamer3514/LinkVertise-Bot')
	    .setDescription('Here are my commands!')
	    .setThumbnail('https://i.imgur.com/06Ccmfx.png')
	    .addFields(
	    	{ name: "``!help``", value: 'Show The Help Menu!', inline: true },
            { name: "``!linkvertise``", value: 'Shorten A Link!!', inline: true },
	    )
	    .setTimestamp()
	    .setFooter({ text: 'Bot Made By Gamer3514#7679' });
        message.reply({ embeds: [helpEmbed] });
    }
    if (command === '!linkvertise') {
        let link = args[0];
        if (!link) return message.reply("Please provide a valid link to shorten!");
        message.reply("Here Is Your Shortened Link! " + linkvertise.getLink(link));
    }

}));

client.login(process.env.token)