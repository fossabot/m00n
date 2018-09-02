const Discord = module.require("discord.js");
const Jimp = require(`jimp`);
module.exports.run = async (bot, message, args) => {
    const blacklisted1 = [process.env.BL1] //Note to myself: add blacklisted people to a JSON or atleast a blacklist command
      const blacklisted2 = [process.env.BL2] //dont want to show IDs here :P

    let Blacklisted = new Discord.RichEmbed()
        .setTitle(":no_entry_sign: Blacklisted")
        .setDescription(`You've been blacklisted from using the Error Command, for at least one of the following reasons:\n 1) Misuse of the Error Command.\n 2) Other reason.`)
        .setFooter("If you'd like to appeal to be whitelisted please contact hernikplays#4673")
        .setColor("RED")
        .setThumbnail(message.author.avatarURL);

        if(message.author.id == blacklisted1 || message.author.id == blacklisted2) return message.channel.send(Blacklisted); 
    let replies = [`Won't work`, `May work`, `👀`, `Will Work`, `Who knows if it will work`, `High Chance of Working`, `Will Work <3`, `A Great Match <3`, `PERFECT MATCH ❤`]
        let result = Math.floor(Math.random() * replies.length);
        let mUser = message.mentions.users.first()
        let mUser2 = message.mentions.users.last()
        if(!mUser) return message.channel.send(`Please specifify two users next time!`)
        const mUserA = mUser.avatarURL
        var imagetobase = `https://www.botempire.tk/i/test.png`;
        Jimp.read(mUser.avatarURL, function (err, imagetouse) {
            if (err) throw err;
            imagetouse.quality(60)
                      .resize(866, 866)
                      .write("imagetouse.jpg");
            Jimp.read(mUser2.avatarURL, function (err, imagetouse2) {
            if (err) throw err;
            imagetouse2.quality(60)
                      .resize(866, 866)
                      .write("imagetouse2.jpg");
            Jimp.read(imagetobase, function (err, mydude) {
                if (err) throw err;
                Jimp.loadFont(Jimp.FONT_SANS_64_WHITE).then(function (font) {
                    mydude.quality(60)
                    mydude.print(font, 635, 1717, `${message.author.username}`)
                    mydude.composite( imagetouse, 784, 797 )
                    mydude.composite( imagetouse2, 2191, 797)
                    mydude.write("saveme.jpg");
                    mydude.getBuffer(`image/jpeg`, (err, buf) => {
                        if (err) return err;
                        message.channel.send({files: [{attachment: buf, name: `saveme.jpg`}] });
                        message.channel.send(replies[result]);
                        
                    });
                });
            });}
        )});
  
}

module.exports.help = {
    name: "ship"
}