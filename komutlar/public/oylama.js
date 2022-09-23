const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

let anket = args.slice(0).join(" ")
    const uyari = new EmbedBuilder()
    .setDescription("Ne Anketi Yapıcaz?")
    .setColor("Red")
    if(!anket) return message.reply({embeds: [uyari]})
    let embed = new EmbedBuilder()
    .setColor("Random")
    .setTitle("Fatih Adın Anket")
    .setDescription(`${anket}`)
    message.channel.send({ embeds: [embed] }).then(async m => {
        await m.react("✅")
        await m.react("❌")
    })
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "oylama"
};

/*
#region RENK
Kırmızı
.setColor("#fc0606")
Yeşil  
.setColor("#3bdc3d")
Mavi
.setColor("#007fff")
*/