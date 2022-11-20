import { SlashCommandPartial, SlashCommandOptionType } from '@harmonyland/harmony'
import path from 'path'
import fs from 'fs'

const commands: SlashCommandPartial[] = []

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'))

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file)
  const command = require(filePath).default

  const slashCommand = {
    name: command.data.name,
    description: command.data.description,
    options: command.data.options
  } as SlashCommandPartial

  commands.push(slashCommand)
}

export default commands