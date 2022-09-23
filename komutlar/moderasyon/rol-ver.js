const {EmbedBuilder} = require("discord.js");

exports.run = async (client, message, args) => {
    const uyarı = new EmbedBuilder()
    .setDescription(`Bu komutu kullanabilmek için \`Rolleri Yönet\` yetkisine sahip olmalısın.`)
    .setColor("Red")
    if (!message.member.permissions.has("MANAGE_ROLES")) return message.reply({embeds : [uyarı]});
        
    let role = message.mentions.roles.first();
    let member = message.mentions.members.first();

    const uyarıRol = new EmbedBuilder()
    .setDescription('Lütfen Vermek İstediğiniz Rolü Etiketleyin!')
    .setColor("Red")
    if (!role) return message.reply({embeds: [uyarıRol]})

    const uyarıMember = new EmbedBuilder()
    .setDescription('Lütfen Rol Vermek İstediğiniz Kişiyi Etiketleyin!')
    .setColor("Red")
    if (!member) return message.reply({embeds: [uyarıMember]})
    
    member.roles.add(role)
        
    const embed = new EmbedBuilder()
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    .setDescription(`**Rol Verilen Kullanıcı: **${message.mentions.users.first()}\n**Verilen Rol: **${role}\n**Yetkili:** <@${message.author.id}>`)
    .setTimestamp()
    .setColor('Blue')
    
    message.channel.send({embeds: [embed]})
};
exports.conf = {
  aliases: ["rolver"]
};

exports.help = {
  name: "rol-ver"
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