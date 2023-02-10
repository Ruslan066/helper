

let { Telegraf } = require('telegraf');
const bot = new Telegraf('6262320229:AAGXga_bACBigzvXi_EhrzC8CGGsvS0EX0s');
bot.start((ctx) => ctx.reply('Welcome'));
bot.launch();
let tgtext = 'test';
// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

bot.on ('message',(ctx) => {
    console.log(ctx.message.text);
    tgtext = ctx.message.text;
    //window.location.reload();

} )
/////////////////////////
const express = require('express')
const {Configuration, OpenAIApi} = require("openai");
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.set('views', './templates')
app.use("/public", express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index', {textFromTg: tgtext})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


const configuration = new Configuration({
    apiKey: '6030967124:AAFDZUXO6VY3Udmf0BKRApW-fZ5LmGeiSLw',
});
const openai = new OpenAIApi(configuration);
async function sendMessage2() {

    let newText = "ccc";
    var val = document.getElementById('message').value;
    const response = await openai.createCompletion({
        model: "code-davinci-002",
        prompt: val,
        max_tokens: 600,
        n: 1,
        stop: null,
        temperature: 0.5,
    });
    newText = response.choices[0].text
    app.get('/', (req, res) => {
        res.render('index', {textFromTg: newText})
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
}
