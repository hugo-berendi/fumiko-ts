import * as hym from '@harmonyland/harmony'
import * as cmdb from '../modules/commandBuilder'
import akaneko from 'akaneko'

const commandData = {
	name: 'nsfw',
	description: 'Sends nsfw images',
	options: [
		{
			name: 'hentai',
			description: 'Sends a hentai image',
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
						},
						{
							name: 'zettaiRyouiki',
							value: 'zettaiRyouiki'
						},
						{
							name: 'yuri',
							value: 'yuri'
						},
						{
							name: 'uniform',
							value: 'uniform'
						},
						{
							name: 'uglyBastard',
							value: 'uglyBastard'
						},
						{
							name: 'thighs',
							value: 'thighs'
						},
						{
							name: 'tentacles',
							value: 'tentacles'
						},
						{
							name: 'succubus',
							value: 'succubus'
						},
						{
							name: 'school',
							value: 'school'
						},
						{
							name: 'pussy',
							value: 'pussy'
						},
						{
							name: 'panties',
							value: 'panties'
						},
						{
							name: 'orgy',
							value: 'orgy'
						},
						{
							name: 'netorare',
							value: 'netorare'
						},
						{
							name: 'masturbation',
							value: 'masturbation'
						},
					]
				}
			] as hym.SlashCommandOption[]
		}
	] as hym.SlashCommandOption[],
	choices: [] as any[]
}

function chooseHentai(type: string) {
	if (type == 'ass') {
		return akaneko.nsfw.ass()
	} else if (type == 'bdsm') {
		return akaneko.nsfw.bdsm()
	} else if (type == 'blowjob') {
		return akaneko.nsfw.blowjob()
	} else if (type == 'cum') {
		return akaneko.nsfw.cum()
	} else if (type == 'doujin') {
		return akaneko.nsfw.doujin()
	} else if (type == 'feet') {
		return akaneko.nsfw.feet()
	} else if (type == 'femdom') {
		return akaneko.nsfw.femdom()
	} else if (type == 'foxgirl') {
		return akaneko.nsfw.foxgirl()
	} else if (type == 'gifs') {
		return akaneko.nsfw.gifs()
	} else if (type == 'glasses') {
		return akaneko.nsfw.glasses()
	} else if (type == 'hentai') {
		return akaneko.nsfw.hentai()
	} else if (type == 'masturbation') {
		return akaneko.nsfw.masturbation()
	} else if (type == 'netorare') {
		return akaneko.nsfw.netorare()
	} else if (type == 'orgy') {
		return akaneko.nsfw.orgy()
	} else if (type == 'panties') {
		return akaneko.nsfw.panties()
	} else if (type == 'pussy') {
		return akaneko.nsfw.pussy()
	} else if (type == 'school') {
		return akaneko.nsfw.school()
	} else if (type == 'succubus') {
		return akaneko.nsfw.succubus()
	} else if (type == 'tentacles') {
		return akaneko.nsfw.tentacles()
	} else if (type == 'thighs') {
		return akaneko.nsfw.thighs()
	} else if (type == 'uglyBastard') {
		return akaneko.nsfw.uglyBastard()
	} else if (type == 'uniform') {
		return akaneko.nsfw.uniform()
	} else if (type == 'yuri') {
		return akaneko.nsfw.yuri()
	} else if (type == 'zettaiRyouiki') {
		return akaneko.nsfw.zettaiRyouiki()
	}
}

function commandCallback(interaction: hym.Interaction) {
	if (interaction.isApplicationCommand()) {
		if (interaction.subCommand == 'hentai') {
			const tag = interaction.option.name
			const emb = new hym.Embed({
				title: 'Hentai',
				description: `Type: ${tag}`,
			})

			return interaction.respond({
				embeds: [emb],
			})
		}
	}
}


const nsfwCommand = new cmdb.SlashCommandBuilder(commandData, commandCallback)

export default nsfwCommand

