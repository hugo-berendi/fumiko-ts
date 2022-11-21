import * as hym from '@harmonyland/harmony'
import * as cmdb from '../modules/commandBuilder'
import akaneko from 'akaneko'
import { RandomPHUB } from 'discord-phub'

const porn = new RandomPHUB(true)

const hentai = akaneko.nsfw

const commandData = {
	name: 'nsfw',
	description: 'Sends nsfw images',
	options: [
		{
			name: 'hentai',
			description: 'Sends a hentai image',
			required: false,
			type: hym.SlashCommandOptionType.SUB_COMMAND,
			options: [
				{
					name: 'tag',
					description: 'The tag of the hentai image',
					required: true,
					type: hym.SlashCommandOptionType.STRING,
					choices: [
						{
							name: 'ass',
							value: 'ass'
						},
						{
							name: 'bdsm',
							value: 'bdsm'
						},
						{
							name: 'blowjob',
							value: 'blowjob'
						},
						{
							name: 'doujin',
							value: 'doujin'
						},
						{
							name: 'feet',
							value: 'feet'
						},
						{
							name: 'femdom',
							value: 'femdom'
						},
						{
							name: 'foxgirl',
							value: 'foxgirl'
						},
						{
							name: 'gifs',
							value: 'gifs'
						},
						{
							name: 'glasses',
							value: 'glasses'
						},
						{
							name: 'hentai',
							value: 'hentai'
						},
						{
							name: 'maid',
							value: 'maid'
						}
					]
				}
			] as hym.SlashCommandOption[]
		}
	] as hym.SlashCommandOption[],
	choices: [] as any[]
}

function commandCallback(interaction: hym.Interaction) {
	if (interaction.isApplicationCommand()) {
		if (interaction.subCommand == 'nsfw') {
			const emb = new hym.Embed({
				title: 'Hentai',
				description: `Type: ${interaction.option.name}`,
				image: {
					url: `${eval(`hentai.${interaction.option.name}()`)}`
				}
			})

			return interaction.respond({
				embeds: [emb],
			})
		}
	}
}

const nsfwCommand = new cmdb.SlashCommandBuilder(commandData, commandCallback)

export default nsfwCommand
