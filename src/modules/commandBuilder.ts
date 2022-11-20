import * as hym from '@harmonyland/harmony'

type CommandCallback = (interaction: hym.Interaction) => any

type CommandOption = {
    name: string | undefined,
    description: string | undefined,
    required: boolean | undefined,
    type: hym.SlashCommandOptionType | undefined
}

type CommandData = {
    name: string | undefined,
    description: string | undefined,
    options: CommandOption[] | [] | undefined
}

export class SlashCommandBuilder {
    constructor(
            public data: CommandData, 
            public callback: CommandCallback) {
        this.data = data
        this.callback = callback
    }
}