const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setTitle("Fatih Adın Twitch")
    .setDescription("https://www.twitch.tv/fatihadin")
    .setColor("#007fff")
    .setTimestamp()
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "twitch"
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