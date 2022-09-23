const {EmbedBuilder} = require("discord.js");
const { stripIndents } = require('common-tags');

exports.run = async (client, message, args) => {
    /*let x;
    let x2;
    let x3;
    let x4;
    let x5;
    let x6;
    let x7;
    let x8;
    let x9;
    let x10;
    let x11;
    
    //yönetici
    if (message.member.permissions.has("ADMINISTRATOR")) x = "✅"
    if (!message.member.permissions.has("ADMINISTRATOR")) x = "❌ "
    
    //Denetim kaydı
    if (message.member.permissions.has("VIEW_AUDIT_LOG")) x2 = "✅"
    if (!message.member.permissions.has("VIEW_AUDIT_LOG")) x2 = "❌ "
    
    //Sunucuyu yönet
    if (message.member.permissions.has("MANAGE_GUILD")) x3 = "✅"
    if (!message.member.permissions.has("MANAGE_GUILD")) x3 = "❌ "
    
    //Rolleri yönet
    if (message.member.permissions.has("MANAGE_ROLES")) x4 = "✅"
    if (!message.member.permissions.has("MANAGE_ROLES")) x4 = "❌ "
    
    //Kanalları yönet
    if (message.member.permissions.has("MANAGE_CHANNELS")) x5 = "✅"
    if (!message.member.permissions.has("MANAGE_CHANNELS")) x5 = "❌ "
    
    //üyeleri at
    if (message.member.permissions.has("KICK_MEMBERS")) x6 = "✅"
    if (!message.member.permissions.has("KICK_MEMBERS")) x6 = "❌ "
    
    //üyeleri yasakla
    if (message.member.permissions.has("BAN_MEMBERS")) x7 = "✅"
    if (!message.member.permissions.has("BAN_MEMBERS")) x7 = "❌ "
    
    //mesajları yönet
    if (message.member.permissions.has("MANAGE_MESSAGES")) x8 = "✅"
    if (!message.member.permissions.has("MANAGE_MESSAGES")) x8 = "❌ "
    
    //kullanıcı adlarını yönet
    if (message.member.permissions.has("MANAGE_NICKNAMES")) x9 = "✅"
    if (!message.member.permissions.has("MANAGE_NICKNAMES")) x9 = "❌ "
    
    //emojileri yönet
    if (message.member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) x10 = "✅"
    if (!message.member.permissions.has("MANAGE_EMOJIS_AND_STICKERS")) x10 = "❌ "
    
    //webhookları yönet
    if (message.member.permissions.has("MANAGE_WEBHOOKS")) x11 = "✅"
    if (!message.member.permissions.has("MANAGE_WEBHOOKS")) x11 = "❌ "

    const embed = new EmbedBuilder()
    .setTitle("Fatih Adın Yetkilerim")
    .setDescription(` ${x} Yönetici \n${x2} Denetim Kaydını Görüntüle\n ${x3} Sunucuyu Yönet \n${x4} Rolleri Yönet \n${x5} Kanalları Yönet \n${x6} Üyeleri At \n${x7} Üyeleri Yasakla \n${x8} Mesajları Yönet \n${x9} Kullanıcı Adlarını Yönet \n${x10} Emojileri Yönet \n${x11} Webhook'ları Yönet`)
    .setColor('Blue')
    .setThumbnail('https://cdn.discordapp.com/avatars/1014842707287482428/5f6eb08b231d53685a906603404765cd.png?size=1024')
    .setTimestamp();
    message.channel.send({embeds : [embed]});*/

    const hata = new EmbedBuilder()
    .setDescription("Komut Şuan Devredışıdır!")
    .setColor("Red")
    message.reply({embeds: [hata]})
};
exports.conf = {
  aliases: []
};

exports.help = {
  name: "yetkilerim"
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