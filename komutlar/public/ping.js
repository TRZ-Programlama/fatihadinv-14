const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const embed = new EmbedBuilder()
    .setDescription(`Botun Pingi : ${client.ws.ping}ms`)
    .setColor("Blue")
    return message.reply({embeds : [embed]});

};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "ping"
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