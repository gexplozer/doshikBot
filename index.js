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
	const result = [{ "id": 1, "type": "photo", "photo_url": "https://www.utkonos.ru/resample/450x450q95/images/photo/3081/3081817H.jpg", "thumb_url":"https://www.utkonos.ru/resample/450x450q95/images/photo/3081/3081817H.jpg"}];
	ctx.answerInlineQuery(result);
})
bot.startPolling();