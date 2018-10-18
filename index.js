const Telegraf = require('telegraf');

const bot = new Telegraf("679868232:AAErCx6ZBlQtwiolYL3VIo-TW1KPxQUkjDs");

bot.on('text', (ctx) => {
	ctx.reply(`Hello ${ctx.state.role}`)
})
console.log("hell");
bot.startPolling();