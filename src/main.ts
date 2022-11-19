import * as eris from "eris"
import * as dotenv from "dotenv"

dotenv.config()

const token: string = process.env.DISCORD_TOKEN as string

const bot = new eris.Client(token)