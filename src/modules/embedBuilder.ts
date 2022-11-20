import * as hym from '@harmonyland/harmony'

type EmbedType = {
    name: string,
    id: number,
    color: number | undefined
}

export enum EmbedTypes {
    custom = 0,
    error = 1,
    success = 2
}

const EmbedTipes: EmbedType[] = [
    {
        name: 'custom',
        id: 0,
        color: undefined
    },
    {
        name: 'error',
        id: 1,
        color: 0x9c1405
    },
    {
        name: 'success',
        id: 2,
        color: 0x0ec460
    }
]

export class EmbedBuilder {
    constructor(
            public type: number | 0,
            public title: string,
            public description: string | undefined,
            public color: number | undefined,
            public fields: hym.EmbedField[] | undefined,
            public footer: string | undefined
            ) {
        this.type = type

        if (this.type == 0) {
            this.color = color
        } else {
            this.color = EmbedTipes[this.type].color
        }

        this.title = title

        if (description != undefined) {
            this.description = description
        }

        if (fields != undefined) {
            this.fields = fields
        }

        if (footer != undefined) {
            this.footer = footer
        }
    }

    create() {
        const embed = new hym.Embed({
            title: this.title,
            color: this.color,
        })

        if (this.description != undefined) {
            embed.setDescription(this.description)
        }
        if (this.fields != undefined) {
            embed.setFields(this.fields)
        }
        if (this.footer != undefined) {
            embed.setFooter({
                text: this.footer
            })
        }

        return embed
    }
}