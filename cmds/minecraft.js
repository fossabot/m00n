let Discord = module.require("discord.js");
const snekfetch = require("snekfetch");
module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.reply("Specify text please")
    let [title, contents] = args.join(" ").split("|");
  if(!contents) {
    [title, contents] = ["Achievement Get!", title];
  }
  let rnd = Math.floor((Math.random() * 39) + 1);
  if(args.join(" ").toLowerCase().includes("burn")) rnd = 38;
  if(args.join(" ").toLowerCase().includes("cookie")) rnd = 21;
  if(args.join(" ").toLowerCase().includes("cake")) rnd = 10;
  if(args.join(" ").toLowerCase().includes("diamond")) rnd = 29;

//  if(title.length > 10 || contents.length > 10) return message.channel.send("Max Length: 10 Characters.");
  const url = `https://www.minecraftskinstealer.com/achievement/a.php?i=${rnd}&h=${encodeURIComponent(title)}&t=${encodeURIComponent(contents)}`;
  snekfetch.get(url)
   .then(r=>message.channel.send("", {files:[{attachment: r.body}]}));
  
}

module.exports.help = {
    name: "minecraft"
}