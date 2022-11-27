//i know you are here to remove the credits, please don't :)
const { EmbedBuilder} = require('discord.js');
module.exports.run = (client, message, args) => {
    const creditsEmbed = new EmbedBuilder()
    .setColor(0xE08616)
    .setTitle('Bot Credits')
    .setURL('https://github.com/TheGamer3514/LinkVertise-Bot')
    .setDescription('Credits of this bot!')
    .setThumbnail('https://i.imgur.com/06Ccmfx.png')
    .addFields(
        { name: "``Creator:``", value: 'Gamer3514#7679', inline: true },
        { name: "``Support Server:``", value: '[Link](https://discord.gg/WeQ3TpdfZM)', inline: true },
        { name: "``Contact Me:``", value: 'gamer@sillydev.co.uk', inline: true },
        { name: "``Github:``", value: '[Link](https://github.com/TheGamer3514/LinkVertise-Bot)', inline: true },
    )
    .setTimestamp()
    .setFooter({ text: 'Bot Made By Gamer3514#7679' });
    message.reply({ embeds: [creditsEmbed] });
}

