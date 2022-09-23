const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın.`)
    .setColor("Red")
    let id = args [0]
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [uyarı]});

    const uyarıId = new EmbedBuilder()
    .setDescription('Lütfen Geçerli Bir ID Giriniz.')
    .setColor("Random")
    if (isNaN(id)) return message.reply({embeds: [uyarıId]});

    message.guild.fetchBans().then(ban => {
        const uyarı1 = new EmbedBuilder()
        .setDescription('Bu Sunucuda Hiç Kimse Yasaklanmamış')
        .setColor("Random")
        if (ban.size === 0) return message.reply({embeds: [uyarı1]});
        const banlanan = ban.find(b => b.user.id === id)

        const uyarı2 = new EmbedBuilder()
        .setDescription('Bu Kişi Bu Sunucuda Yasaklanmamış ki')
        .setColor("Random")
        if (!banlanan) return message.reply({embeds: [uyarı2]});
        message.guild.members.unban(banlanan.user)

        const embed = new EmbedBuilder()
        .setTitle('Fatih Adın UnBan')
        .setDescription(`Bu Idli Kişinin Banı Kalkmıştır.\n **Banı Kaldıran Yetkili:** <@${message.author.id}>`)
        .setColor('Green')
        .setTimestamp()
        message.channel.send({embeds: [embed]})
    })
};
exports.conf = {
  aliases: ["yasak-kaldır"]
};

exports.help = {
  name: "unban"
};