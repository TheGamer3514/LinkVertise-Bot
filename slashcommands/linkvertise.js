const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('linkvertise')
		.setDescription('Shrink A Url!'),
	async execute(interaction) {
		await interaction.reply(`Hi! Sorry! This command is currently only available using prefix commands ``!linkvertise url``. This will be available on slash commands soon!`);
	},
};