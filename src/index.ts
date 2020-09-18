import * as ENV from 'dotenv';
import { Telegraf } from 'telegraf';
import { spawn } from 'child_process';
ENV.config();

// TODO: пофиксить проблему с невидимыми переменные окружения
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const bot = new Telegraf(process.env.TOKEN);

bot.start((ctx) => ctx.reply('Hello my name is Dima'));

bot.launch()
	.then(() => console.log('Listening...'));
