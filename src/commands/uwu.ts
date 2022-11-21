import * as hym from '@harmonyland/harmony'
import * as cmdb from '../modules/commandBuilder'

const commandData = {
  name: 'uwu',
  description: 'UwU!',
  options: [] as any[],
  choices: [] as any[]
}

function commandCallback(interaction: hym.Interaction) {
  return interaction.respond({
    content: 'UwU'
  })
}

const uwuCommand = new cmdb.SlashCommandBuilder(
  commandData, 
  commandCallback
)

export default uwuCommand