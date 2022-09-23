const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {

    const user = message.mentions.users.first()
        if (user) {
          const embed = new EmbedBuilder()
          .setTitle('Avatar Link')
          .setURL(user.avatarURL({ dynamic: true }))
          .setImage(user.displayAvatarURL({ dynamic: true , size: 4096 }))
          //.setFooter(`${message.author.tag} tarafından istenildi.`)
          .setTimestamp()
          .setColor("#007fff")
          message.reply({embeds: [embed]})
        } else {
          const embed = new EmbedBuilder()
          .setTitle('Avatar Link')
          .setImage(message.author.displayAvatarURL({ dynamic: true , size: 4096 }))
          .setURL(message.author.avatarURL({ dynamic: true }))
          //.setFooter(`${message.author.tag} tarafından istenildi.`)
          .setTimestamp()
          .setColor("#007fff")
          message.channel.send({embeds: [embed]})
        }
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "avatar"
};