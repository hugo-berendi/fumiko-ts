import * as hym from '@harmonyland/harmony'
import * as cmdb from '../modules/commandBuilder'
import anilist, { AnimeEntry } from 'anilist-node'

const commandData = {
	name: 'anime',
	description: 'Anime infos and more',
	options: [
		{
			name: 'search',
			description: 'Search an anime by its name',
			type: hym.SlashCommandOptionType.SUB_COMMAND,
			options: [
                {
					name: 'name',
					description: 'Enter a name of an anime.',
					required: true,
					type: hym.SlashCommandOptionType.STRING
                }
			] as hym.SlashCommandOption[]
		}
	] as hym.SlashCommandOption[],
	choices: [] as any[]
}


async function commandCallback(interaction: hym.Interaction) {
	if (interaction.isApplicationCommand()) {
		if (interaction.subCommand == 'search') {
            const Anilist = new anilist()

			const name: string = interaction.options[0].value

            const anime_data = await Anilist.searchEntry.anime(name)
			const media = anime_data.media

            if (!media) {
                const emb = new hym.Embed()
                    .setDescription('Error (media)')
                return interaction.respond({
                    embeds: [emb],
                })
            }
            if (!media[0]) {
                    const emb = new hym.Embed()
                        .setDescription('Error (entry)')
                    return interaction.respond({
                        embeds: [emb],
                    })
                }
                Anilist.media.anime(media[0].id).then(anime => {
                    const color: number = anime.coverImage.color.replace('#', '0x') as unknown as number
                    const emb = new hym.Embed()
                        .setDescription(anime.description)
                        .setTitle(anime.title.native)
                        .setURL(anime.siteUrl)
                        .setColor(color)
                        .setThumbnail(anime.coverImage.large)
                    return interaction.respond({
                        embeds: [emb],
                    })
                })
		}
	}
}


const animeCommand = new cmdb.SlashCommandBuilder(commandData, commandCallback)

export default animeCommand
