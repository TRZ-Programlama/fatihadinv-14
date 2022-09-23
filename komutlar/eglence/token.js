const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    if (message.channel.type !== 'dm') {
        const embed = new EmbedBuilder()
        .setDescription(`<@${message.author.id}> Sana tokenimi vereceğime gerçekten inandın mı \nGerçekten inandıysan helal olsun.`)
        .setColor("Random")
        .setTimestamp()
        return message.channel.send({embeds: [embed]});
    }
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "token"
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