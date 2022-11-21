import * as hym from '@harmonyland/harmony'

type CommandCallback = (interaction: hym.Interaction) => any

type CommandOption = {
    name: string | undefined,
    description: string | undefined,
    required: boolean | undefined,
    type: hym.SlashCommandOptionType | undefined,
    options: CommandOption[] | undefined | hym.ApplicationCommandOption[],
    choices: hym.SlashCommandChoice[] | undefined
}

type CommandData = {
    name: string | undefined,
    description: string | undefined,
    options: CommandOption[] | undefined | hym.ApplicationCommandOption[],
    choices: hym.SlashCommandChoice[] | undefined
}

export class SlashCommandBuilder {
    constructor(
            public data: CommandData, 
            public callback: CommandCallback) {
        this.data = data
        this.callback = callback
    }
}