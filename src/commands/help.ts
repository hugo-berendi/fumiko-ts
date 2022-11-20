import path from 'path'
import fs from 'fs'
import * as hym from '@harmonyland/harmony'
import * as cmdb from '../modules/commandBuilder'
import * as embb from '../modules/embedBuilder'
import { describe } from 'node:test'

const commandData = {
  name: 'help',
  description: 'Sends a list with all commands',
  options: [] as any[]
}

function commandCallback(interaction: hym.Interaction) {
  const commandsPath = path.join(__dirname, './')
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'))

  const fields = [] as hym.EmbedField[]

  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath).default

    const field = {
      name: command.data.name as string,
      value: command.data.description as string
    } as hym.EmbedField

    fields.push(field)
  }

  const emb = new embb.EmbedBuilder(
    embb.EmbedTypes.custom,
    'Command List',
    'A list of all commands',
    0x0b8cd6,
    fields,
    'by Kamachi#0001'
  )

  return interaction.respond({ 
    embeds: [emb.create()]
  })
}

const helpCommand = new cmdb.SlashCommandBuilder(
  commandData, 
  commandCallback
)

export default helpCommand