const fs = require('fs');
require('dotenv').config()
var badWord=require('badwords/array')
const { Telegraf } = require('telegraf')
// var badWords=""
//   for (i in badWord){
//     badWords=badWords+badWord[i]+'\n'
// }

// fs.writeFile("books.txt", badWords, (err) => {
//     if (err)
//       console.log(err);
//     else {
//       console.log("File written successfully\n");
//       console.log("The written has the following contents:");
//       console.log(fs.readFileSync("books.txt", "utf8"));
//     }
//   });
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
for (i in badWord){
    bot.hears(badWord[i], (ctx) => ctx.reply(` its is a bad word Don't use it dude `))
}
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()



