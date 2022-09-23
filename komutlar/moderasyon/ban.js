const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
  let me = message.guild.members.cache.get(client.user.id);
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Üyeleri Yasakla\` yetkisine sahip olmalısın.`)
    .setColor("#fc0606");
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply({embeds: [uyarı]});
    
    let sebep = args.slice(1).join(" ") || "Belirtilmemiş";
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    const embed1 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.');
    if (!member) return message.reply({embeds : [embed1]});
    
    const embed2 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Sunucu Sahibini banlayamam!');
    if (message.guild.ownerId === member.id) return message.reply({embeds: [embed2]});

    const embed3 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Kendini banlayamazsın!');
    if (message.author.id === member.id)return message.reply({embeds: [embed3]});

    const embed4 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Kendimi banlayamam!');
    if (client.user.id === member.id) return message.reply({ embeds: [embed4]});
    
    if (message.guild.ownerId !== message.author.id) {
      const embed5 = new EmbedBuilder()
      .setColor("#fc0606")
      .setDescription('**Başarısız!** kullanıcının rolü senden yüksek');
      if (member.roles.highest.position >= message.member.roles.highest.position) return message.reply({embeds: [embed5]});
    }
    
    const embed6 = new EmbedBuilder()
      .setColor("#fc0606")
      .setDescription(' **Başarısız!** Kullanıcının rolü benim rolümden yüksek!');
    if (member.roles.highest.position >= me.roles.highest.position)return message.reply({embeds: [embed6]});
    
    
    message.guild.members.ban(member, { reason: `Yetkili: ${message.author.tag} Sebep: ` + sebep || "Belirtilmemiş" }).then(() => {
      const embed4 = new EmbedBuilder()
        .setColor("#3bdc3d")
        .setTitle("Fatih Adın")
        .addFields(
          {
            name: "BAŞARILI",
            value: "**Banlanan kişi İdsi : **" + member + `\n**` + sebep + "**"+ " sebebiyle sunucudan yasaklandı!"|| "**Belirtilmemiş** sebebiyle sunucudan yasaklandı!"
          }
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
        .setTimestamp();
        message.channel.send({embeds: [embed4]})
    })
};
exports.conf = {
  aliases: ["yasakla"]
};

exports.help = {
  name: "ban"
};