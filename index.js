const Telegraf = require('telegraf');
const express = require('express')
const PORT = process.env.PORT || 5000

express()
	.listen(PORT, () => console.log(`Listening on ${PORT}`))

const bot = new Telegraf("679868232:AAErCx6ZBlQtwiolYL3VIo-TW1KPxQUkjDs");

bot.on('text', (ctx) => {
	ctx.reply(`Hello ${ctx.state.role}`)
})
bot.on('inline_query', (ctx) => {
	const result = [{'0':'Вот это поворот!'}];
	ctx.answerInlineQuery(result);
})
bot.startPolling();