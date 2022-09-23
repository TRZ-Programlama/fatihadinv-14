const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
  let me = message.guild.members.cache.get(client.user.id);
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Üyeleri At\` yetkisine sahip olmalısın.`)
    .setColor("#fc0606");
    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply({embeds: [uyarı]});
    
    let sebep = args.slice(1).join(" ") || "Belirtilmemiş";
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    const embed1 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('Lütfen sunucudan atacağınız kişiyi etiketleyin.');
    if (!member) return message.reply({embeds : [embed1]});
    
    const embed2 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Sunucu Sahibini atamam!');
    if (message.guild.ownerId === member.id) return message.reply({embeds: [embed2]});

    const embed3 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Kendini atamazsın!');
    if (message.author.id === member.id)return message.reply({embeds: [embed3]});

    const embed4 = new EmbedBuilder()
    .setColor("#fc0606")
    .setDescription('**Başarısız!** Kendimi atamam!');
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
    
    
    message.guild.members.kick(member, { reason: `Yetkili: ${message.author.tag} Sebep: ` + sebep || "Belirtilmemiş" }).then(() => {
      const embed4 = new EmbedBuilder()
        .setColor("#3bdc3d")
        .setTitle("Fatih Adın")
        .addFields(
          {
            name: "BAŞARILI",
            value: "**Atılan kişi İdsi : **" + member + `\n**` + sebep + "**"+ " sebebiyle sunucudan atıldı!"|| "**Belirtilmemiş** sebebiyle sunucudan atıldı!"
          }
        )
        .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
        .setTimestamp();
        message.channel.send({embeds: [embed4]})
    })
};
exports.conf = {
  aliases: ["at"]
};

exports.help = {
  name: "kick"
};