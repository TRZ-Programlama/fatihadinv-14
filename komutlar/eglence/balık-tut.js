const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    const embed = new EmbedBuilder()
    .setDescription("Balık Tuttun Balığı Çekiyorsun..")
    .setColor("Blue")
    message.channel.send({embeds: [embed]}).then(message => {

        var motion = [
          "``Sazan Tuttun!`` :fish:",
          "``Köpek Balığı Tuttun İyi Para Eder Sat Sat`` :D",
          "``Uskumru Tuttun!`` :fish:",
          "``Mezgit Tuttun! Havyarıda Var Hee`` :) :fish:",
          "``Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde?``",
          "``Hamsi Tuttun!`` :fish:",
          "``Levrek Tuttun!`` :fish:",
          "``Hiçbirşey Tutamadın Maalesef!`` :wastebasket:",
          "``Alabalık Tuttun!`` :fish:",
          "``Maalesef Balık Oltadan Kaçtı!`` :wastebasket:",
          "``İstavrit Tuttun!`` :fish:"
        ];
        var motion = motion[Math.floor(Math.random() * motion.length)];
        const embed = new EmbedBuilder()
        .setDescription(`${motion}`)
        .setColor("Random")
        message.edit({embeds: [embed]});
    })
};
exports.conf = {
  aliases: ["balıktut"]
};

exports.help = {
  name: "balık-tut"
};
