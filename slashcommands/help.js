const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Show The Help Menu!'),
    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
        .setColor(0xE08616)
        .setTitle('Help')
        .setURL('https://github.com/TheGamer3514/LinkVertise-Bot')
        .setDescription('Here are my commands!')
        .setThumbnail('https://i.imgur.com/06Ccmfx.png')
        .addFields(
            { name: "``!help``", value: 'Show The Help Menu!', inline: true },
            { name: "``!ping``", value: 'Show The Bot Ping!', inline: true },
            { name: "``!linkvertise``", value: 'Shorten A Link!', inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'Bot Made By Gamer3514#7679' });
            await interaction.reply({ embeds: [helpEmbed] });
    },
};
