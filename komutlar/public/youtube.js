const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Fatih Adın Youtube")
    .setDescription(`https://www.youtube.com/channel/UCBKn8u9uN0eewPgGZpVFpNw`)
    .setColor("#007fff")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: ["yt"]
};

exports.help = {
  name: "youtube"
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