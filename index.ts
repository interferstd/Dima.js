import * as ENV from 'dotenv';
import { Telegraf } from 'telegraf';
ENV.config();

const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('Hello World'));

bot.launch()
	.then(() => console.log('Listening...'));