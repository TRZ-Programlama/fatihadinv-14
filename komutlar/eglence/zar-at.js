const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
    .setDescription("Bekle..")
    .setColor("Blue")
    message.channel.send({embeds: [embed]}).then(a => {
        var zar1 = ['1', '2', '3', '4', '5', '6'];
        var zar2 = ['1', '2', '3', '4', '5', '6'];
        setTimeout(() => {
            const embed = new EmbedBuilder()
            .setDescription(`*Zar atıldı. Çıkan sonuç:* **${Math.floor(Math.random()*zar1.length)} - ${Math.floor(Math.random()*zar2.length)}**`)
            .setColor("Random")
            a.edit({embeds : [embed]})
        }, 1000);
    });
};
exports.conf = {
  aliases: ["zarat"]
};

exports.help = {
  name: "zar-at"
};