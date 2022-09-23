const {EmbedBuilder} = require("discord.js");
const moment = require("moment")
require("moment-duration-format")

exports.run = async (client, message, args) => {
    const member = message.mentions.members.first() || message.member
    const embed = new EmbedBuilder()
    .setDescription(`**${member} Kullanıcısı Bilgileri**`)
    .addFields(
        {
            name : "Hesap Kuruluş Tarihi",
            value : '`' + moment.utc(member.user.createdAt).format('LLLL') + '`',
            inline: true
        }, 
        {
            name: "Sunucuya Katıldığı Tarih",
            value: '`' + moment.utc(member.joinedAt).format('LLLL') + '`',
            inline: true
        }
    )
    .setThumbnail(member.user.avatarURL({dynamic:true}))
    .setTimestamp()
    .setColor("Random")
        
    message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "user"
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