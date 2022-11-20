import * as hym from '@harmonyland/harmony'
import { type StatusType, type ActivityGame, ActivityTypes } from '@harmonyland/harmony'
import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import commands from './commands'

dotenv.config()

const token: string = process.env.DISCORD_TOKEN as string

const client = new hym.Client()

const guildId: string = '990521467215171594'

const commandsPath = path.join(__dirname, 'commands')
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'))

client.on('ready', () => {

  const status = 'dnd' as StatusType
  const activity = {
    name: '/help',
    type: ActivityTypes.PLAYING
  } as ActivityGame

  const presence = new hym.ClientPresence({
    status: status,
    activity: activity
  })

  client.setPresence(presence)

  commands.forEach(command => {
    client.slash.commands.create(command, guildId)
      .then((cmd) => console.log(`Created Slash Command ${cmd.name}!`))
      .catch((err) => console.error(err))
  })

  console.log(`Connected as ${client.user?.tag}!`)
})

client.on('interactionCreate', (interaction: hym.Interaction) => {
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath).default

    const idata = interaction.data as hym.InteractionApplicationCommandData

    if (idata.name == command.data.name) {
      command.callback(interaction)
    }
  }
})

client.connect(token, hym.Intents.All)
