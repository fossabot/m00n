const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const fs = require("fs");
const prefix = "m!"; //change to your prefix
const DBL = require("dblapi.js") //discordbotlist API
const dbl = new DBL(process.env.DBL_TKN, bot);
const unirest = require("unirest") //used to access botsfordiscord.com API

const active = new Map();

bot.commands = new Discord.Collection();



fs.readdir("./cmds/", (err, files) => {
    if (err) console.error(err);

    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("No commands to load! Please add some to the 'cmds' folder!");
    }

    console.log(`Loading ${jsfiles.length} commands!`);

    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i + 1}: ${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
});
// SERVER COUNT POST START
bot.on("ready", async() => {
    unirest.post('https://botsfordiscord.com/api/bot/481894520741691393')
        .headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
        .send({ "count": bot.guilds.size, "Authorization": process.env.BFD_TKN })
        .end(function(response) {
            console.log("It worked hopefully");
        });
    dbl.on('posted', () => {
        console.log('Server count posted!');
    })

    dbl.on('error', e => {
        console.log(`Oops! ${e}`);
    })
    console.log("Bot is online!");
    // SERVER COUNT POST END



    bot.user.setActivity(`the sky in ${bot.guilds.size} servers // m!help`, { type: 'WATCHING' });
});

bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;





    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!command.startsWith(prefix)) return;

    let cmd = bot.commands.get(command.slice(prefix.length));

    let musicOps = {
        active: active
    }
    if (cmd) {
        cmd.run(bot, message, args, musicOps);

    }

});

bot.login(process.env.BOT_TKN); //process.env.BOT_TKN is for heroku, change it to "yourtokenhere"