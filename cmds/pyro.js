let Discord = module.require("discord.js");

module.exports.run = async(bot, message, args) => {
    let pyromemes = [
        "https://i2.kym-cdn.com/photos/images/original/001/220/720/569.gif",
        "https://i.ytimg.com/vi/mLY4p_W6RB0/hqdefault.jpg",
        "https://s8.postimg.cc/dhqtdbrd1/pyro.jpg",
        "https://i.redd.it/6zm482l1r63y.png",
        "https://78.media.tumblr.com/bcb8650d1a4008adf82b3a81c159a8cb/tumblr_ow94acgvhs1w9eqv0o1_1280.png",
        "https://i.ytimg.com/vi/T7TWe3aiYqg/maxresdefault.jpg",
        "https://media.tenor.com/images/6cdd45fbe9f4eb800f69587d051d5562/tenor.gif",
        "https://cdn.discordapp.com/attachments/469680760232738816/483974855184744498/unknown.png",
        "https://cdn.discordapp.com/attachments/469680760232738816/485869489553014794/Bed.PNG",
        "https://i.postimg.cc/nc86v2d8/pyrostair.jpg",
        "https://i.postimg.cc/0QMBSKD2/pyroalex.jpg"
    ]
    let result = Math.floor((Math.random() * pyromemes.length));
    const e = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Here you go!`)
        .setImage(pyromemes[result])
        .setFooter("Sub to pyro!")
    message.channel.send({
        embed: e
    })

}

module.exports.help = {
    name: "pyro"
}