const Telegraf = require('telegraf');

const bot = new Telegraf("679868232:AAErCx6ZBlQtwiolYL3VIo-TW1KPxQUkjDs");

bot.on('text', (ctx) => {
	ctx.reply(`Hello ${ctx.state.role}`)
})
bot.on('inline_query', (ctx) => {
	const result = ["Вот это поворот!"];
	ctx.answerInlineQuery(result);
})
bot.startPolling();