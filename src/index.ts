import * as ENV from 'dotenv';
import { Telegraf } from 'telegraf';
ENV.config();

// TODO: пофиксить проблему с невидимыми переменные окружения
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('Hello World'));

bot.launch()
	.then(() => console.log('Listening...'));