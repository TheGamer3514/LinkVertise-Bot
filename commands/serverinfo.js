const { EmbedBuilder} = require('discord.js');
const moment = require("moment");
module.exports.run = (client, message, args) => {
    const serverinfoEmbed = new EmbedBuilder()
    .setColor(0xE08616)
    .setTitle('Server Info')
    .setURL('https://github.com/TheGamer3514/LinkVertise-Bot')
    .setDescription('Here is some info about this server!')
    .setThumbnail('https://i.imgur.com/06Ccmfx.png')
    .addFields(
        { name: "``!ping``", value: 'Show The Bot Ping!', inline: true },
        { name: "``!ping``", value: 'Show The Bot Ping!', inline: true },
        { name: "``Channel Count:``", value: `${client.channels.cache.size}`, inline: true },
        { name: "``!ping``", value: 'Show The Bot Ping!', inline: true },
        { name: "``!linkvertise``", value: 'Shorten A Link!', inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'Bot Made By Gamer3514#7679' });
    message.reply({ embeds: [serverinfoEmbed] });
}

