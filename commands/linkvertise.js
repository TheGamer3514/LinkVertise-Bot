const { EmbedBuilder} = require('discord.js');
const Linkvertise = require("././lib/linkvertise")
const linkvertise = new Linkvertise(process.env.linkvertise_id)
module.exports.run = (client, message, args) => {
    let link = args[0];
    if (!link) return message.reply("Please provide a valid link to shorten!");
    const linkvertiseEmbed = new EmbedBuilder()
    .setColor(0xE08616)
    .setTitle('Url Shortner')
    .setURL('https://github.com/TheGamer3514/LinkVertise-Bot')
    .setDescription('Here is your link!')
    .setThumbnail('https://i.imgur.com/06Ccmfx.png')
    .addFields(
        { name: "Link:", value: linkvertise.getLink(link)},
    )
    .setTimestamp()
    .setFooter({ text: 'Bot Made By Gamer3514#7679' });
    message.reply({ embeds: [linkvertiseEmbed] });
}
