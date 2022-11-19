import * as eris from "eris";
import * as dotenv from "dotenv";

dotenv.config();

const token: string = process.env.DISCORD_TOKEN as string;

const bot = new eris.Client(token);

bot.on("ready", () => {
  console.log(`Connected as ${bot.user.username}#${bot.user.discriminator}`);
})

bot.connect()